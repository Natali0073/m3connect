<template>
  <div class="d-flex h-100 text-white">
    <div class="side-bar d-flex flex-column align-center justify-space-between">
      <Logo/>
      <SideMenu
        :title="pageTitle"
        :menu-list="menuList"
        @selectMenu="changeView($event)"/>
      <BackButton/>
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
    };
  },
  computed: {
    restaurantInfo() {
      return this.$store.state.cmsRestaurantData;
    },
    menuList() {
      return this.$store.getters.restaurantMenu;
    },
  },
  beforeCreate() {},
  created() {
    this.getInfo(this.menuIndex);
  },
  async fetch({ store }) {
    if (store.getters.restaurantMenu.length === 0) {
      await store.dispatch('fetchRestaurantMenuList');
    }
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
