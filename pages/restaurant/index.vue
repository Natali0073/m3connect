<template>
  <div class="d-flex">
    <div class="side-bar">
      <Logo/>
      cont 1
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
  }
</script>

<style>
  .side-bar {
    width: 30%;
  }

  .main-bar {
    width: 70%;
    background: black;
  }
</style>
