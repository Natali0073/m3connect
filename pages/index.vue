<template>
  <v-layout
    column>
    <v-toolbar flat color="transparent"
               class="main-toolbar">
      <Logo />
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
          <v-icon color="white">mdi-web</v-icon>
          <span>EN</span>
        </div>
        <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
          <v-icon color="white">mdi-weather-sunny</v-icon>
          <span>23 C</span>
        </div>
        <div class="d-flex flex-column font-07 justify-center align-center mr-5 text-color-light">
          <v-icon color="white">mdi-calendar</v-icon>
          <span>SA</span>
        </div>
        <div class="d-flex flex-column font-07 justify-center align-center text-color-light">
          <v-icon color="white">mdi-clock-outline</v-icon>
          <span>14:20</span>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <div class="d-flex flex-column justify-center align-center">
      <!--<transition name="fade">-->
        <!--<p v-if="show">привет</p>-->
      <!--</transition>-->
      <div class="greetings-title text-center text-color-light mb-10">Welcome Mr. Smith. Enjoy your stay!</div>
      <v-btn-toggle
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn v-for="(item) in items">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" :to="item.to">
            <div class="d-flex flex-column justify-center align-center mr-5">
              <v-icon large>{{item.icon}}</v-icon>
              <span>{{item.title}}</span>
            </div>
          </nuxt-link>
        </v-btn>

      </v-btn-toggle>
    </div>
  </v-layout>
</template>

<script>
  import Logo from '@/components/Logo';
  export default {
    components: {
      Logo
    },
    data () {
      return {
        items: [
          {
            icon: 'mdi-television',
            title: 'TV',
            to: '/tv'
          },
          {
            icon: 'mdi-silverware',
            title: 'Restaurant',
            to: '/restaurant'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Spa',
            to: '/spa'
          },
          {
            icon: 'mdi-ticket',
            title: 'Attractions',
            to: '/attractions'
          },
          {
            icon: 'mdi-sailing',
            title: 'Traveling',
            to: '/traveling'
          }
        ],
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

  .text-color-light {
    color: white;
  }

  .greetings-title {
    font-family: 'Dancing Script', cursive;
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
</style>
