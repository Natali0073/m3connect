<template>
  <div class="flex-column">
    <h1 class="text-center courgette-font">Spa Facilties</h1>
    <div class="d-flex align-center justify-center flex-wrap">
      <div 
        v-for="(item) in data"
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
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      mockData: [
        {
          image: '/img/bar_compressed.png',
          title: 'Pool',
          content: ['Indoor pool', 'Celling windows', 'Bright natural light '],
        },
        {
          image: '/img/dinner_compressed.png',
          title: 'Spa',
          content: ['Indoor pool', 'Celling windows', 'Bright natural light '],
        },
      ],
    };
  },
};
</script>

<style scoped>
.item-container {
  width: 30%;
  margin: 15px 30px;
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

.courgette-font {
  font-family: 'Courgette', cursive;
}

.text-14 {
  font-size: 14px;
}

.text-18 {
  font-size: 18px;
}

.system-gold-text {
  color: #846b42;
}

.bold-text {
  font-weight: bold;
}

.theme--light.v-divider {
  border-color: #846b42;
}
</style>
