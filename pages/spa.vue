<template>
  <div class="h-100 text-white">
    <Logo/>
    <h1 class="text-center title">SPA FACILITIES</h1>
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
      pageInfo: {},
    };
  },
  computed: {
    spaInfo() {
      return this.$store.state.cmsSpaData;
    },
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
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

.title {
  margin-top: -30px;
  text-align: center;
}

.h-100 {
  height: 100%;
}
</style>
