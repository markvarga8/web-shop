import http from '../helpers/HttpHelper'

export default {
  namespaced: true,
  state: {
    photos: null,
    title: null,
    loading: false
  },
  mutations: {
    setPhotos: (state, payload) => {
      state.photos = payload
    },
    setLoading: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    async getPhotos (context) {
      context.commit('setLoading', true)
      try {
        const result = await http(context).get('https://jsonplaceholder.typicode.com/photos')
        context.commit('setPhotos', result.data)
      } catch (err) {
        console.log(err)
      }
      context.commit('setLoading', false)
    }
  }
}
