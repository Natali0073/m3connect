<template>
  <div class="menu-bar d-flex flex-column align-center mx-12">
    <div class="icon-with-border pa-3">
      <v-icon x-large
              color="white">mdi-silverware
      </v-icon>
    </div>
    <h1 class="courgette-font mb-5 font-weight-light">
      {{title}}
    </h1>
    <v-list class="w-100">
      <v-list-item-group v-model="model"
                         active-class="active-item">
        <v-list-item
          v-for="item in menuList"
          :key="item.value"
          @click="changeSelection(item.value)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  export default {
    props: {
      menuList: Array,
      title: String,
    },
    data() {
      return {
        model: 0
      }
    },
    methods: {
      changeSelection(value) {
        this.$emit('selectMenu', value)
      }
    }
  }
</script>

<style>
  .menu-bar {
    width: calc(100% - 96px);
  }

  .font-20 {
    font-size: 20px;
  }

  .courgette-font {
    font-family: 'Courgette', cursive;
  }

  .w-100 {
    width: 100%;
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
    border-radius: 0 !important;
    padding: 0 !important;
    background: transparent !important;
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


