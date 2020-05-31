<template>
  <div class="h-100 w-100">
    <Loading v-if="isLoading"/>
    <v-layout
      v-else
      column>
      <v-toolbar
        flat
        color="transparent"
        class="main-toolbar mt-6">
        <Logo/>
        <v-spacer/>
        <v-toolbar-items>
          <div 
            v-if="bookings.length"
            class="d-flex flex-column align-center mr-5 text-color-light top-icon"
            @mouseover="openBanner">
            <v-icon 
              color="white" 
              large>mdi-bell</v-icon>
            <span class="notification-counter">{{ bookings.length + 1 }}</span>
          </div>
          <div class="d-flex flex-column justify-center align-center mr-5 text-color-light top-icon">
            <v-icon 
              color="white" 
              large>mdi-weather-sunny</v-icon>
            <span>{{ weather.current.temperature }} &#8451;</span>
          </div>
          <div class="d-flex flex-column justify-center align-center mr-5 text-color-light top-icon">
            <v-icon 
              color="white" 
              large>mdi-calendar</v-icon>
            <span>{{ day }}</span>
          </div>
          <div class="d-flex flex-column justify-center align-center text-color-light top-icon">
            <v-icon 
              color="white" 
              large>mdi-clock-outline</v-icon>
            <span>{{ time }}</span>
          </div>
        </v-toolbar-items>
      </v-toolbar>
      <div 
        v-if="showBanner" 
        class="banner-container">
        <v-banner 
          elevation="10"
          transition="slide-y-transition">
          <div>Your dishes are <span class="text-bold">preparing</span></div>
          <v-divider class="my-3" />
          <div 
            v-for="item in bookings"
            :key="item.id"
            class="my-2">
            <span class="text-bold">{{ item.title }}</span> at <span class="text-bold">{{ item.bookingDate }}</span>
          </div>
          <template v-slot:actions="{ dismiss }">
            <v-icon 
              @click="closeBanner">mdi-close</v-icon>
          </template>
        </v-banner>
      </div>
      <div class="d-flex justify-center align-center main-menu">
        <div class="d-flex flex-column justify-center align-center">
          <div
            class="greetings-title text-center text-color-light mb-10 dancing-font"
          >Welcome {{ homeInfo && homeInfo.gender === 'male' ? 'Mr.' : 'Mrs.' }} {{ homeInfo ? homeInfo.userLastName : '' }}. Enjoy your stay!
          </div>
          <v-btn-toggle group>
            <v-btn
              v-for="(item) in items"
              :key="item.title">
              <nuxt-link
                :to="item.to"
                exact
                no-prefetch
                active-class="active"
                class="nav-link">
                <div class="d-flex flex-column justify-center align-center mr-5">
                  <v-icon large>{{ item.icon }}</v-icon>
                  <span class="font-15">{{ item.title }}</span>
                </div>
              </nuxt-link>
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Loading from '@/components/Loading';
import * as moment from 'moment';

const firebase = require('../firebaseConfig.js');

export default {
  components: {
    Logo,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      showBanner: false,
      timer: undefined,
      items: [
        {
          icon: 'mdi-silverware',
          title: 'Restaurant',
          to: '/restaurant',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Spa',
          to: '/spa',
        },
        {
          icon: 'mdi-ticket',
          title: 'Attractions',
          to: '/attractions',
        },
      ],
      time: this.$moment().format('HH:mm'),
      day: this.$moment().format('ddd'),
    };
  },
  computed: {
    homeInfo() {
      return this.$store.getters.homeInfo;
    },
    weather() {
      return this.$store.getters.weather;
    },
    bookings() {
      return this.$store.getters.bookings;
    },
  },
  beforeCreate() {
    this.isLoading = true;
  },
  created() {
    const scope = this;
    setInterval(() => {
      scope.time = scope.$moment().format('HH:mm');
    }, 30000);
  },
  async fetch({ store }) {
    if (!store.getters.weather) {
      await store.dispatch('fetchWeather');
    }
  },
  mounted() {
    this.getBookings();
    this.getUser();
  },
  methods: {
    getUser() {
      firebase.db
        .collection('user')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.$store.commit('setHomeInfo', doc.data());
            this.isLoading = false;
          });
        });
    },
    getBookings() {
      firebase.db
        .collection('booked-tours')
        .get()
        .then(querySnapshot => {
          const bookings = [];
          querySnapshot.forEach(doc => {
            bookings.push({
              ...doc.data(),
              bookingDate: moment()
                .add(doc.data().id, 'day')
                .format('DD/MM/YYYY'),
            });
          });
          this.$store.commit('setBookings', bookings);
        });
    },
    openBanner() {
      this.showBanner = true;

      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.showBanner = false;
      }, 50000);
    },
    closeBanner() {
      this.showBanner = false;

      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
  },
};
</script>

<style>
.text-color-light {
  color: white;
}

.dancing-font {
  font-family: 'Dancing Script', cursive;
}

.greetings-title {
  font-size: 3em;
}

.text-bold {
  font-weight: bold;
}

.main-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-toolbar__content {
  width: 100%;
}

.nav-link {
  color: white !important;
  text-decoration: none;
}

.main-menu {
  width: 100%;
  position: absolute;
  top: calc(50% - 150px);
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

.banner-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  font-size: 20px;
}

.banner-container .v-banner__actions {
  align-self: flex-start !important;
  margin-left: 30px;
}

.notification-counter {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 0.8;
  padding: 4px 6px;
  position: absolute;
  top: -10px;
  margin-left: -10px;
  background-color: #f44336;
  border-color: #f44336;
  font-size: 20px;
}

.top-icon {
  font-size: 24px;
}

.font-15 {
  font-size: 1.5em;
}
</style>
