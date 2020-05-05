const firebase = require('../firebaseConfig.js');

export const state = () => ({
  homeInfo: null,
  restaurantMenu: [],
  cmsRestaurantData: [],
  cmsSpaData: [],
  weather: null,
});

export const mutations = {
  setHomeInfo(state, homeInfo) {
    state.homeInfo = homeInfo;
  },
  setRestaurantMenu(state, restaurantMenu) {
    state.restaurantMenu = restaurantMenu;
  },
  setCmsRestaurantData(state, list) {
    state.cmsRestaurantData = list;
  },
  setCmsSpaData(state, list) {
    state.cmsSpaData = list;
  },
  setWeather(state, list) {
    state.weather = list;
  },
};

function getCmsData(dataFiles) {
  const data = dataFiles.keys().map(key => {
    let res = dataFiles(key);
    res.slug = key.slice(2, -5);
    return res;
  });
  return data;
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let restaurantFiles = await require.context(
      '~/assets/content/data/',
      false,
      /\.json$/
    );
    let spaFiles = await require.context(
      '~/assets/content/spa/',
      false,
      /\.json$/
    );

    let restaurantData = getCmsData(restaurantFiles);
    let spaData = getCmsData(spaFiles);
    await commit('setCmsRestaurantData', restaurantData);
    await commit('setCmsSpaData', spaData);
  },
  async fetchWeather({ commit }) {
    const apiKey = '370ea4e0741c93ac23290a1e7c524975';
    const city = 'Lviv';
    const weather = await this.$axios.$get(
      `hhttp://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
    commit('setWeather', weather);
  },
};

export const getters = {
  homeInfo: s => s.homeInfo,
  restaurantMenu: s => s.restaurantMenu,
  weather: s => s.weather,
};
