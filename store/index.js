export const state = () => ({
  homeInfo: [],
  cmsData: [],
});

export const mutations = {
  setHomeInfo(state, homeInfo) {
    state.homeInfo = homeInfo
  },

  setCmsData(state, list) {
    state.cmsData = list;
  },
};

export const actions = {
    async fetch({commit}) {
    const homeInfo = await this.$axios.$get('https://my-json-server.typicode.com/Natali0073/m3connect-test-data/profile');
    commit('setHomeInfo', homeInfo)
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
};

export const getters = {
    homeInfo: s => s.homeInfo
};
