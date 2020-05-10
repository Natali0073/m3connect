<template>
  <div class="">
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
          <span>&#10003; {{ data }}</span>
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
  margin: 15px 50px;
}

.item-container:nth-child(odd) {
  margin-left: 100px;
}

.item-container:nth-child(even) {
  margin-right: 100px;
}

.text-center {
  text-align: center;
}

.content-info {
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  color: #000000;
  width: 70%;
  margin-top: -100px;
  margin-left: 35%;
  padding: 20px;
  height: 160px;
  box-shadow: -8px -7px 38px -12px rgba(0, 0, 0, 1);
  border-radius: 5px;
}
</style>
