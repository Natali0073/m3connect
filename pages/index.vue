<template>
  <div class="h-100 w-100">
    <Loading v-if="isLoading"/>
    <v-layout v-else
              column>
      <v-toolbar flat color="transparent"
                 class="main-toolbar">
        <Logo/>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
            <v-icon color="white">mdi-web</v-icon>
            <span>{{homeInfo.lang}}</span>
          </div>
          <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
            <v-icon color="white">mdi-weather-sunny</v-icon>
            <span>{{weather.current.temperature}} &#8451;</span>
          </div>
          <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
            <v-icon color="white">mdi-calendar</v-icon>
            <span>{{day}}</span>
          </div>
          <div class="d-flex flex-column font-07 justify-center align-center text-color-light">
            <v-icon color="white">mdi-clock-outline</v-icon>
            <span>{{time}}</span>
          </div>
        </v-toolbar-items>
      </v-toolbar>
      <div class="d-flex justify-center align-center main-menu">
        <div class="d-flex flex-column justify-center align-center">
          <div class="greetings-title text-center text-color-light mb-10 dancing-font">
            Welcome {{homeInfo.name}}. Enjoy your stay!
          </div>
          <v-btn-toggle
            group
          >
            <v-btn @click="tvClick">
              <div class="d-flex flex-column justify-center align-center mr-5 text-color-light">
                <v-icon large>mdi-television</v-icon>
                <span>TV</span>
              </div>
            </v-btn>
            <v-btn v-for="(item) in items"
                   :key="item.title">
              <nuxt-link exact
                         no-prefetch
                         active-class="active"
                         class="nav-link"
                         :to="item.to">
                <div class="d-flex flex-column justify-center align-center mr-5">
                  <v-icon large>{{item.icon}}</v-icon>
                  <span>{{item.title}}</span>
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
  export default {
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
    components: {
      Logo,
      Loading
    },
    data () {
      return {
        isLoading: true,
        items: [
          {
            icon: 'mdi-silverware',
            title: 'Restaurant',
            to: '/restaurant'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Spa',
            to: '/restaurant'
          },
          {
            icon: 'mdi-ticket',
            title: 'Attractions',
            to: '/restaurant'
          },
          {
            icon: 'mdi-sailing',
            title: 'Traveling',
            to: '/restaurant'
          }
        ],
        time: this.$moment().format('HH:mm'),
        day: this.$moment().format('ddd')
      }
    },
    async fetch({store}) {
      if (!store.getters.homeInfo) {
        await store.dispatch('fetchHomeInfo')
      }

      if (!store.getters.weather) {
        await store.dispatch('fetchWeather')
      }
    },
    computed: {
      homeInfo() {
        return this.$store.getters.homeInfo
      },

      weather() {
        return this.$store.getters.weather
      }
    },
    methods: {
      tvClick: () => {

      },
    }
  }
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
