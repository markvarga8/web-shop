import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import AuthModule from './modules/AuthModule'
import ProductModule from './modules/ProductModule'

Vue.use(Vuex)

const persistence = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    product: ProductModule
  },
  plugins: [
    persistence.plugin
  ]
})
