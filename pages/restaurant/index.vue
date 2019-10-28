<template>
  <div class="d-flex h-100 text-white">
    <div class="side-bar d-flex flex-column align-center justify-space-between ">
      <Logo/>
      <div class="menu-bar d-flex flex-column align-center mx-12">
        <div class="icon-with-border pa-3">
          <v-icon x-large color="white">mdi-silverware</v-icon>
        </div>
        <div class="courgette-font mb-5 font-20">
          Gourmet
        </div>
        <v-list class="w-100">
          <v-list-item-group v-model="model" active-class="active-item">
            <v-list-item
              v-for="(item, i) in menuList"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <div class="mb-12 icon-with-border pa-3">
        <nuxt-link exact no-prefetch to="/">
          <v-icon medium color="white">mdi-undo-variant</v-icon>
        </nuxt-link>
      </div>
    </div>
    <div class="main-bar">
      cont 2
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  export default {
    components: {
      Logo
    },
    data() {
      return {
        menuList: [
          {
            title: 'Breakfast',
            value: 'breakfast',
          },
          {
            title: 'Lunch',
            value: 'lunch',
          },
          {
            title: 'Dinner',
            value: 'dinner',
          },
          {
            title: 'Bar',
            value: 'bar',
          }
        ],
        model: 0
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');

  .font-20 {
    font-size: 20px;
  }

  .text-white {
    color: #ffffff;
  }

  .menu-bar {
    width: calc(100% - 96px);
  }

  .side-bar {
    width: 30%;
  }

  .courgette-font {
    font-family: 'Courgette', cursive;
  }

  .h-100 {
    height: 100%;
  }

  .w-100 {
    width: 100%;
  }

  .main-bar {
    width: 70%;
    background: black;
  }

  .icon-with-border {
    border-radius: 50%;
    background: rgba(0, 0, 0, .4);
    max-width: 64px;
  }

  .icon-with-border a {
    text-decoration: none;
  }

  .v-list {
    border-radius: 0;
    padding: 0;
    background: transparent;
  }

  .v-list-item {
   background: #ffffff;
    margin-bottom: 10px;
  }

  .active-item {
    background: #886B42;
    color: #ffffff !important;
  }
</style>
