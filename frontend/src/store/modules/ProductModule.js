import http from '../helpers/HttpHelper'
// import search from '../helpers/SearchHelper'
// import lunr from 'lunr'

export default {
  namespaced: true,
  state: {
    photos: null,
    loading: false,
    index: null
  },
  mutations: {
    setPhotos: (state, payload) => {
      state.photos = payload
    },
    setIndex: (state, payload) => {
      state.index = payload
    },
    setLoading: (state, payload) => {
      state.loading = payload
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
    }
  }
}
