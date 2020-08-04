import http from '../helpers/HttpHelper'
// import search from '../helpers/SearchHelper'
// import lunr from 'lunr'

export default {
  namespaced: true,
  state: {
    photos: null,
    loading: false,
    index: null,
    basket: null
  },
  mutations: {
    setPhotos: (state, payload) => {
      state.photos = payload
    },
    setIndex: (state, payload) => {
      state.index = payload
    },
    setBasket: (state, payload) => {
      if (!state.basket) {
        state.basket = payload
      } else {
        state.basket.push(payload)
      }
    },
    setLoading: (state, payload) => {
      state.loading = payload
    },
    deleteSessionData: (state, payload) => {
      state.basket = payload
    }
  },
  actions: {
    async getPhotos (context) {
      context.commit('setLoading', true)
      try {
        const result = await http(context).get('/product')
        context.commit('setPhotos', result.data.products)
      } catch (err) {
        console.log(err)
      }
      context.commit('setLoading', false)
    },
    search (context, sd) {
      context.commit('setIndex', sd)
    },
    basket (context, data) {
      context.commit('setBasket', data)
    },
    basketDelete (context, data) {
      context.commit('deleteSessionData', data)
    }
  }
}
