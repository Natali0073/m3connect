<template>
  <v-expansion-panels
    multiple>
    <v-expansion-panel
      v-for="(item,i) in dataList"
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
</template>

<script>
export default {
  props: {
    dataList: Array,
  },
  data() {
    return {
      selected: [],
    };
  },
  mounted() {
    console.log(dataList);
  },
};
</script>
