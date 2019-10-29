<template>
  <div class="d-flex h-100 text-white">
    <div class="side-bar d-flex flex-column align-center justify-space-between">
      <Logo/>
      <SideMenu :title="pageTitle"
                :menuList="menuList"
                @selectMenu="changeView($event)"/>
      <BackButton/>
    </div>
    <div class="main-bar pa-12">
      <RestaurantsInfo :data="restaurantsList[menuIndex]"/>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import SideMenu from '@/components/SideMenu'
  import BackButton from '@/components/BackButton'
  import RestaurantsInfo from '@/components/RestaurantsInfo'

  export default {
    components: {
      Logo,
      SideMenu,
      BackButton,
      RestaurantsInfo
    },
    data () {
      return {
        pageTitle: 'Gourmet',
        menuIndex: 0,
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
        restaurantsList: [
          {
            title: 'Breakfast',
            restaurantInfo: {
              name: 'Val Marina Restaurant',
              imageName: 'breakfast.png',
              workingHours: '10:00 a.m - 11:30 p.m'
            }
          },
          {
            title: 'Lunch',
            restaurantInfo: {
              name: 'Top Bar Restaurant',
              imageName: 'restaurant.png',
              workingHours: '14:00 p.m - 17:00 p.m'
            }
          },
          {
            title: 'Dinner',
            restaurantInfo: {
              name: 'Sensori Spa Restaurant',
              imageName: 'dinner.png',
              workingHours: '14:00 p.m - 17:00 p.m'
            }
          },
          {
            title: 'Bar',
            restaurantInfo: {
              name: 'Lobby Bar',
              imageName: 'bar.png',
              workingHours: '12:00 a.m - 22:00 p.m'
            }
          },
        ]
      }
    },
    methods: {
      changeView (value) {
        this.menuIndex = value;
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

  /*.courgette-font {*/
    /*font-family: 'Courgette', cursive;*/
  /*}*/

  /*.text-14 {*/
     /*font-size: 14px;*/
   /*}*/

  /*.text-18 {*/
    /*font-size: 18px;*/
  /*}*/

  /*.system-gold-text {*/
    /*color: #846b42;*/
  /*}*/

  /*.bold-text {*/
    /*font-weight: bold;*/
  /*}*/

  /*.theme--light.v-divider {*/
    /*border-color: #846b42;*/
  /*}*/
</style>
