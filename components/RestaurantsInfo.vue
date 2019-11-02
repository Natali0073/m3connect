<template>
  <div class="flex-column">
    <h1 class="courgette-font font-weight-light my-12">
      {{data.title}}
    </h1>
    <div class="d-flex">
      <img :src="require(`../static${data.image}`)" alt="restaurant" width="40%" height="100%"/>
      <div class="d-flex flex-column ml-12">
        <h2 class="courgette-font font-weight-light">{{data.restaurant}}</h2>
        <div class="my-5 text-14">
          {{data.cuisine}}
        </div>
        <div v-html="$md.render(data.additionalInfo)" />
        <v-divider class="mt-5"></v-divider>
      </div>
    </div>
    <h2 class="courgette-font my-12 font-weight-light">
      Reserve a table
    </h2>
    <div class="d-flex">
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Scan the QR code with your smartphone</span>
        <img src="@/assets/images/qrcode.png" alt="qrcode" width="100">
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="courgette-font font-weight-light my-1 system-gold-text text-18">or</div>
        <v-divider vertical class="ml-2"></v-divider>
      </div>
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Call our reception to reserve a table</span>
        <span class="bold-text">{{data.phoneNumber}}</span>
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="courgette-font font-weight-light my-1 system-gold-text text-18">or</div>
        <v-divider vertical class="ml-2"></v-divider>
      </div>
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Visit our website to make a booking</span>
        <span class="bold-text">{{data.website}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
  }
</script>

<style scoped>
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
