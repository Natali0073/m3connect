<template>
  <div class="h-100 w-100">
    <Loading v-if="isLoading"/>
    <v-layout
      v-else
      column>
      <v-toolbar
        flat
        color="transparent"
        class="main-toolbar">
        <Logo/>
        <v-spacer/>
        <v-toolbar-items>
          <div 
            class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light"
            @mouseover="openBanner">
            <v-icon color="white">mdi-bell</v-icon>
            <span class="notification-counter">0</span>
          </div>
          <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
            <v-icon color="white">mdi-weather-sunny</v-icon>
            <span>{{ weather.current.temperature }} &#8451;</span>
          </div>
          <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
            <v-icon color="white">mdi-calendar</v-icon>
            <span>{{ day }}</span>
          </div>
          <div class="d-flex flex-column font-07 justify-center align-center text-color-light">
            <v-icon color="white">mdi-clock-outline</v-icon>
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
          <div>Your dishes is <span class="text-bold">preparing</span></div>
          <v-divider class="my-3" />
          <div>You booked <span class="text-bold">tour</span> on <span class="text-bold">date</span></div>
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
                  <span>{{ item.title }}</span>
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
const firebase = require('../firebaseConfig.js');

export default {
  components: {
    Logo,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      showBanner: false,
      timerid: undefined,
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
  methods: {
    openBanner() {
      this.showBanner = true;

      if (this.timerid) {
        clearTimeout(this.timerid);
      }

      this.timerid = setTimeout(() => {
        this.showBanner = false;
      }, 5000);
    },
    closeBanner() {
      this.showBanner = false;

      if (this.timerid) {
        clearTimeout(this.timerid);
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
  font-size: 2em;
}

.font-07 {
  font-size: 0.7em;
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
}

.banner-container .v-banner__actions {
  align-self: flex-start !important;
}

.notification-counter {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 1;
  padding: 4px 6px;
  position: absolute;
  top: 10px;
  margin-left: -10px;
  background-color: #f44336;
  border-color: #f44336;
}
</style>
