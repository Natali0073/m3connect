<template>
  <div class="d-flex align-start justify-center flex-wrap mt-5">
    <div 
      v-for="item in pageInfo"
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
        <div class="text-center source-font">{{ item.title.toUpperCase() }}</div>
        <div 
          v-for="(data) in item.content"
          :key="data"
          class="source-font text-18">
          <span>&#10003; {{ data }}</span>
        </div>
        <div class="booking d-flex align-center flex-column text-20">
          <div class="price">{{ item.price }} &#8364;</div>
          <div class="avaliability">Book on: {{ item.bookingDate }}</div>
          <v-btn 
            :disabled="item.disabled"
            color="green" 
            class="mt-3 mb-3 text-20 color-white"
            @click="bookTour(item)">{{ item.disabled ? 'Booked' : 'Book now' }}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment';
const firebase = require('../firebaseConfig.js');

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      pageInfo: [],
    };
  },
  computed: {
    bookings() {
      return this.$store.getters.bookings;
    },
  },
  created() {
    this.pageInfo = this.data.map(el => ({
      ...el,
      bookingDate: moment()
        .add(el.id, 'day')
        .format('DD/MM/YYYY'),
      disabled: this.bookings.some(item => item.id === el.id),
    }));
  },
  methods: {
    bookTour(tour) {
      firebase.db
        .collection('booked-tours')
        .add({
          title: tour.title,
          id: tour.id,
        })
        .then(() => {
          const tourIndex = this.pageInfo.findIndex(el => el.id === tour.id);
          this.pageInfo[tourIndex].disabled = true;
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    },
    scrollEvent() {
      var element = document.getElementById('scroll-box');

      element.scrollIntoView();
    },
  },
};
</script>

<style scoped>
.item-container {
  width: 28%;
  margin: 0 30px;
}

.source-font {
  font-family: Source Sans Pro, sans-serif;
}

.text-18 {
  font-size: 18px;
}

.text-20 {
  font-size: 20px;
}

.price {
  font-weight: bold;
}

.price,
.avaliability {
  padding: 10px;
}

.avaliability {
  background: #c01414;
  color: #ffffff;
  width: 100%;
  text-align: center;
}

.text-center {
  text-align: center;
}

.booking {
  margin-top: 10px;
  border: 1px solid #000000;
}

.content-info {
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  color: #000000;
  width: 80%;
  margin-top: -100px;
  margin-left: 25%;
  padding: 20px;
  box-shadow: -8px -7px 38px -12px rgba(0, 0, 0, 1);
  border-radius: 5px;
}

.color-white {
  color: #ffffff !important;
}
</style>
