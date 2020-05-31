<template>
  <div class="icon-with-border pa-3">
    <nuxt-link
      exact
      no-prefetch
      to="/">
      <v-icon
        medium
        color="white">mdi-undo-variant</v-icon>
    </nuxt-link>
  </div>
</template>

<style scoped>
.icon-with-border {
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  max-width: 48px;
  margin: 38px auto 0;
}

.icon-with-border a {
  text-decoration: none;
}
</style>
