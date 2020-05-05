<template>
  <div class="d-flex h-100 text-white">
    <div class="side-bar d-flex flex-column align-center justify-space-between">
      <Logo/>
      <SideMenu
        :title="pageTitle"
        :menu-list="menuList"
        @selectMenu="changeView($event)"/>
      <BackButton class="mb-12"/>
    </div>
    <div class="main-bar pa-12">
      <RestaurantsInfo
        v-if="pageInfo"
        :data="pageInfo"/>
      <div v-else>No data</div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import SideMenu from '@/components/SideMenu';
import BackButton from '@/components/BackButton';
import RestaurantsInfo from '@/components/RestaurantsInfo';

export default {
  components: {
    Logo,
    SideMenu,
    BackButton,
    RestaurantsInfo,
  },
  data() {
    return {
      pageTitle: 'Gourmet',
      menuIndex: '1',
      pageInfo: {},
      menuList: [
        { title: 'Breakfast', value: 1 },
        { title: 'Lunch', value: 2 },
        { title: 'Dinner', value: 3 },
        { title: 'Bar', value: 4 },
      ],
    };
  },
  computed: {
    restaurantInfo() {
      return this.$store.state.cmsRestaurantData;
    },
  },
  beforeCreate() {},
  created() {
    this.getInfo(this.menuIndex);
  },
  methods: {
    changeView(value) {
      this.getInfo(value);
    },
    getInfo(value) {
      const info = this.restaurantInfo.filter(el => el.id === +value);
      this.pageInfo = info[0];
    },
  },
};
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
