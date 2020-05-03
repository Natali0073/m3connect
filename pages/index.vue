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
      <div class="d-flex justify-center align-center main-menu">
        <div class="d-flex flex-column justify-center align-center">
          <div
            class="greetings-title text-center text-color-light mb-10 dancing-font"
          >Welcome {{ homeInfo.gender === 'male' ? 'Mr.' : 'Mrs.' }} {{ homeInfo.userLastName }}. Enjoy your stay!
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
      isLoading: true,
      items: [
        {
          icon: 'mdi-silverware',
          title: 'Restaurant',
          to: '/restaurant',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Spa',
          to: '/restaurant',
        },
        {
          icon: 'mdi-ticket',
          title: 'Attractions',
          to: '/restaurant',
        },
        {
          icon: 'mdi-terrain',
          title: 'Traveling',
          to: '/restaurant',
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
    this.isLoading = false;
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
        });
      });
  },
  methods: {
    tvClick() {
      console.log(1);
      var request = webOS.service.request('luna://com.webos.audio', {
        method: 'setMuted',
        parameters: { muted: true },
        onSuccess: function(inResponse) {
          console.log('TV is muted');
          // To-Do something
        },
        onFailure: function(inError) {
          console.log('Failed to set muted');
          console.log('[' + inError.errorCode + ']: ' + inError.errorText);
          // To-Do something
          return;
        },
      });
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
  height: 100%;
  width: 100%;
  position: absolute;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}
</style>
