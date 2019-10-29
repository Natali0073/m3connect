<template>
  <v-layout
    column>
    <v-toolbar flat color="transparent"
               class="main-toolbar">
      <Logo/>
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
    <div class="d-flex justify-center align-center main-menu">
      <div class="d-flex flex-column justify-center align-center">
        <div class="greetings-title text-center text-color-light mb-10 dancing-font">
          Welcome Mr. Smith. Enjoy your stay!
        </div>
        <v-btn-toggle
          group
        >
          <v-btn @click="createEvent">
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
      }
    },
    methods: {
      createEvent: function (e) {

        hcap.power.getPowerMode({
          "onSuccess" : function(s) {
            var div = document.createElement('div');
            div.innerText = 'TEST DIV';
            div.style.color = 'white';
            div.style.position = 'absolute';
            div.style.background = 'red';
            div.style.bottom = '100px';
            div.style.top = '0';
            document.body.appendChild(div);
            console.log("onSuccess power mode " + s.mode);
          },
          "onFailure" : function(f) {
            var div = document.createElement('div');
            div.innerText = 'TEST DIV';
            div.style.color = 'white';
            div.style.position = 'absolute';
            div.style.background = 'blue';
            div.style.bottom = '100px';
            div.style.top = '0';
            document.body.appendChild(div);
            console.log("onFailure : errorMessage = " + f.errorMessage);
          }
        });

//        console.log('click');
//        var event = new Event('build');
//        document.body.className = 'custom-class';
//        document.body.className = 'test-class';
////        setTimeout(this.sayHi(), 1000);
////        var scope = this;
////        document.addEventListener('build', function (e) {
////          console.log('build event');
////          setTimeout(scope.sayHi(), 1000);
////        }, false);
//        document.dispatchEvent(event);
      },

      sayHi() {
        console.log('sayHi');
        console.log(document);
        var div = document.createElement('div');
        div.innerText = 'TEST DIV';
        div.style.color = 'white';
        div.style.position = 'absolute';
        div.style.background = 'red';
        div.style.bottom = '100px';
        div.style.top = '0';
        document.body.appendChild(div);
      }
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
</style>
