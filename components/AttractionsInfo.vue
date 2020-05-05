<template>
  <div class="d-flex align-center justify-center flex-wrap">
    <div 
      v-for="item in data"
      :key="item.title" 
      class="item-container">
      <img
        :src="require(`../static${item.image}`)"
        class="lazyload"
        alt="Alternate text for the image"
        width="100%"
        height="100%"
      >
      <div class="content-info">
        <div 
          class="text-center" 
          style="font-family: Source Sans Pro, sans-serif;">{{ item.title.toUpperCase() }}</div>
        <div 
          v-for="(data) in item.content"
          :key="data"
          style="font-family: Source Sans Pro, sans-serif; " >
          <span>✓ {{ data }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.item-container {
  width: 30%;
  margin: 15px 50px;
}

.text-center {
  text-align: center;
}

.content-info {
  background: #ffff;
  position: relative;
  color: #000000;
  width: 70%;
  margin-top: -100px;
  margin-left: 35%;
  padding: 20px;
  height: 160px;
}
</style>
