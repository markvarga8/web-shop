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
      const result = state.basket - payload
      state.basket = result
      console.log('state', parseFloat(state.basket))
      console.log('payload', payload)
      console.log('result', parseFloat(result))
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
      console.log(data)
      context.commit('setBasket', data)
    },
    basketDelete (context, data) { // eslint-disable-next-line
      const result = this.state.basket.map((item) => {
        return item.id
      })
      context.commit('deleteSessionData', result)
    }
  }
}
