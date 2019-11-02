export const state = () => ({
  homeInfo: null,
  restaurantMenu: [],
  cmsData: [],
  weather: null,
});

export const mutations = {
  setHomeInfo(state, homeInfo) {
    state.homeInfo = homeInfo
  },
  setRestaurantMenu(state, restaurantMenu) {
    state.restaurantMenu = restaurantMenu
  },
  setCmsData(state, list) {
    state.cmsData = list;
  },
  setWeather(state, list) {
    state.weather = list;
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
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/data/', false, /\.json$/);
    let data = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setCmsData', data);
  },
  async fetchWeather({commit}) {
    const apiKey = '370ea4e0741c93ac23290a1e7c524975';
    const city = 'Lviv';
    const weather = await this.$axios.$get(`hhttp://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
    commit('setWeather', weather)
  },
};

export const getters = {
  homeInfo: s => s.homeInfo,
  restaurantMenu: s => s.restaurantMenu,
  weather: s => s.weather
};
