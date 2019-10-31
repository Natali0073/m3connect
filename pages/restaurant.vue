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
      <RestaurantsInfo v-if="pageInfo" :data="pageInfo"/>
      <div v-else>No data</div>
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
    beforeCreate() {

    },
    created() {
      this.getInfo(this.menuIndex);
    },
    data () {
      return {
        pageTitle: 'Gourmet',
        menuIndex: 'breakfast',
        pageInfo: {},
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
    computed: {
      restaurantInfo() {
        return this.$store.state.cmsData;
      },
    },
    methods: {
      changeView (value) {
        this.getInfo(value);
      },
      getInfo(value) {
        const info = this.restaurantInfo.filter(el => el.title.toLowerCase() === value);
        this.pageInfo = info[0];
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
