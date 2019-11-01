export const state = () => ({
  homeInfo: null,
  restaurantMenu: [],
  restaurantsInfo: [],
});

export const mutations = {
  setHomeInfo(state, homeInfo) {
    state.homeInfo = homeInfo
  },
  setRestaurantMenu(state, restaurantMenu) {
    state.restaurantMenu = restaurantMenu
  },
  setRestaurantsInfo(state, restaurantsInfo) {
    state.restaurantsInfo = restaurantsInfo
  },
};

export const actions = {
  async fetchHomeInfo({commit}) {
    const homeInfo = await this.$axios.$get('https://my-json-server.typicode.com/Natali0073/m3connect-test-data/profile');
    commit('setHomeInfo', homeInfo)
  },
  async fetchRestaurantMenuList({commit}) {
    const restaurantMenu = await this.$axios.$get('https://my-json-server.typicode.com/Natali0073/m3connect-test-data/menuList');
    commit('setRestaurantMenu', restaurantMenu)
  },
  async fetchRestaurantsInfo({commit}) {
    const restaurantsInfo = await this.$axios.$get('https://my-json-server.typicode.com/Natali0073/m3connect-test-data/restaurantsInfo');
    commit('setRestaurantsInfo', restaurantsInfo)
  }
};

export const getters = {
  homeInfo: s => s.homeInfo,
  restaurantMenu: s => s.restaurantMenu,
  restaurantsInfo: s => s.restaurantsInfo
};
