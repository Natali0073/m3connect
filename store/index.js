const firebase = require('../firebaseConfig.js');

export const state = () => ({
  homeInfo: null,
  cmsRestaurantData: [],
  cmsSpaData: [],
  cmsAttractionsData: [],
  weather: null,
  menuList: [],
  bookings: [],
});

export const mutations = {
  setHomeInfo(state, homeInfo) {
    state.homeInfo = homeInfo;
  },
  setCmsRestaurantData(state, list) {
    state.cmsRestaurantData = list;
  },
  setCmsSpaData(state, list) {
    state.cmsSpaData = list;
  },
  setCmsAttractionsData(state, list) {
    state.cmsAttractionsData = list;
  },
  setWeather(state, list) {
    state.weather = list;
  },
  setMenuList(state, list) {
    state.menuList = list;
  },
  setBookings(state, list) {
    state.bookings = list;
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
      '~/assets/content/blog/',
      false,
      /\.json$/
    );

    let spaFiles = await require.context(
      '~/assets/content/spa/',
      false,
      /\.json$/
    );

    let attractionsFiles = await require.context(
      '~/assets/content/attractions/',
      false,
      /\.json$/
    );

    const restaurantData = getCmsData(restaurantFiles);
    const spaData = getCmsData(spaFiles);
    const attractionsData = getCmsData(attractionsFiles);
    await commit('setCmsRestaurantData', restaurantData);
    await commit('setCmsSpaData', spaData);
    await commit('setCmsAttractionsData', attractionsData);
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
  weather: s => s.weather,
  bookings: s => s.bookings,
};
