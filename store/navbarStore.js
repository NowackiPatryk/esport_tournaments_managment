export const state = () => ({
  isNavbarVisible: false
});

export const mutations = {
  setIsNavbarVisible(state, payload) {
    state.isNavbarVisible = !state.isNavbarVisible;
  }
};

export const actions = {
  toggleNavbarVisibility({ commit }) {
    commit("setIsNavbarVisible");
  }
};
