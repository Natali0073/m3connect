<template>
  <div class="mb-12 icon-with-border pa-3">
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

<style>
.icon-with-border {
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  max-width: 64px;
}

.icon-with-border a {
  text-decoration: none;
}
</style>
