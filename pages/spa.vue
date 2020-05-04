<template>
  <div class="h-100 text-white">
    <Logo/>
    <SpaInfo
      v-if="pageInfo"
      :data="pageInfo"/>
    <div v-else>No data</div>
    <BackButton />
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import SideMenu from '@/components/SideMenu';
import BackButton from '@/components/BackButton';
import SpaInfo from '@/components/SpaInfo';

export default {
  components: {
    Logo,
    SideMenu,
    BackButton,
    SpaInfo,
  },
  data() {
    return {
      pageTitle: 'Gourmet',
      menuIndex: '1',
      pageInfo: {},
    };
  },
  computed: {
    spaInfo() {
      return this.$store.state.cmsSpaData;
    },
    menuList() {
      return this.$store.getters.restaurantMenu;
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
      const data = this.spaInfo.slice();
      this.pageInfo = data.sort((a, b) => a.id - b.id);
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
