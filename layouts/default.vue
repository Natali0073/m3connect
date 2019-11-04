<template>
  <v-app class="main-background">
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
<style>
.main-background {
  background-image: url('../assets/images/Artboard.png') !important;
  background-size: cover;
}
</style>
