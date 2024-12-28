import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    favorites: [],
    user: null
  },
  getters: {
    cartCount: state => state.cart.length,
    favoritesCount: state => state.favorites.length,
    isAuthenticated: state => !!state.user
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item)
    },
    addToFavorites(state, item) {
      state.favorites.push(item)
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit }, credentials) {
      // TODO: Implement login logic
      commit('setUser', { id: 1, name: 'Test User' })
    },
    async logout({ commit }) {
      commit('setUser', null)
    }
  },
  modules: {
  }
})
