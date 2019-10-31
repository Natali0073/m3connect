export const state = () => ({
  homeInfo: []
});

export const mutations = {
  setHomeInfo(state, homeInfo) {
    state.homeInfo = homeInfo
  }
};

export const actions = {
  async fetch({commit}) {
  const homeInfo = await this.$axios.$get('https://my-json-server.typicode.com/Natali0073/m3connect-test-data/profile');
  commit('setHomeInfo', homeInfo)
}
};

export const getters = {
    homeInfo: s => s.homeInfo
};
