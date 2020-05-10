<template>
  <div class="flex-column">
    <h1 class="courgette-font font-weight-light my-12">{{ data.title }}</h1>
    <div class="d-flex">
      <img
        :src="require(`../static${data.image}`)"
        class="lazyload"
        alt="Alternate text for the image"
        width="40%"
        height="100%"
      >
      <div class="d-flex flex-column ml-12">
        <h2 class="courgette-font font-weight-light">{{ data.restaurant }}</h2>
        <div class="my-5 text-14">{{ data.cuisine }}</div>
        <div v-html="$md.render(data.additionalInfo)" />
        <v-divider class="mt-5" />
      </div>
    </div>
    <h2 class="courgette-font font-weight-light my-10">Order in the room</h2>
    <h2 class="font-weight-light">Menu:</h2>
    <v-expansion-panels
      v-model="panel"
      multiple>
      <v-expansion-panel
        v-for="(item,i) in menuList.content"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div 
            v-for="(element,i) in item.menu"
            :key="i"
            class="d-flex menu-checkbox">
            <v-checkbox 
              v-model="selected"
              :value="element.name"
              :label="`${element.name}`"/>
            <span 
              v-if="element.ingredients" 
              class="ml-3 mt-3 text-11">({{ element.ingredients }})</span>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="courgette-font font-weight-light mt-6 system-gold-text text-18">or</div>
    <h2 class="courgette-font my-10 font-weight-light">Reserve a table</h2>
    <div class="d-flex">
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Scan the QR code with your smartphone</span>
        <img
          src="@/assets/images/qrcode.png"
          alt="qrcode"
          width="100" >
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="courgette-font font-weight-light my-1 system-gold-text text-18">or</div>
        <v-divider
          vertical
          class="ml-2" />
      </div>
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Call our reception to reserve a table</span>
        <span class="bold-text">{{ data.phoneNumber }}</span>
      </div>
      <div class="d-flex flex-column justify-center">
        <div class="courgette-font font-weight-light my-1 system-gold-text text-18">or</div>
        <v-divider
          vertical
          class="ml-2" />
      </div>
      <div class="d-flex flex-column align-center px-5">
        <span class="mb-2 text-center">Visit our website to make a booking</span>
        <span class="bold-text">{{ data.website }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    menuList: Object,
  },
  data() {
    return {
      selected: [],
    };
  },
};
</script>

<style>
.courgette-font {
  font-family: 'Courgette', cursive;
}

.text-11 {
  font-size: 11px;
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

.menu-checkbox .v-input--selection-controls {
  margin-top: 0;
}

.menu-checkbox .v-messages {
  display: none;
}
</style>
