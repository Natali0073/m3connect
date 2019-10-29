<template>
  <div class="d-flex h-100 text-white">
    <div class="side-bar d-flex flex-column align-center justify-space-between ">
      <Logo/>
      <SideMenu :title="pageTitle"
                :menuList="menuList"
                @selectMenu="changeView($event)"/>
      <BackButton/>
    </div>
    <div class="main-bar">
      cont 2
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import SideMenu from '@/components/SideMenu';
  import BackButton from '@/components/BackButton';

  export default {
    components: {
      Logo,
      SideMenu,
      BackButton
    },
    data() {
      return {
        pageTitle: 'Gourmet',
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
      }
    },
    methods: {
      changeView(value) {
        console.log(value);
      }
    }
  }
</script>

<style>

  .text-white {
    color: #ffffff;
  }

  .side-bar {
    width: 30%;
  }

  .h-100 {
    height: 100%;
  }

  .main-bar {
    width: 70%;
    background: black;
  }
</style>
