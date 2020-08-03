<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">SHOP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="user" @click="logout()">Kijelentkezés</b-nav-item>
          <b-nav-item v-if="!user" href="/signin">Saját fiók</b-nav-item>
          <b-nav-item href="/product">Termékek</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item href="#" v-b-modal.modal-1>
              <b-modal id="modal-1" title="Kosár">
                <p class="my-4">Hello from modal!</p>
              </b-modal>
              <b-icon-basket class="h2 m-2">
              </b-icon-basket>
            </b-nav-item>
            <b-form @submit.prevent="search">
              <b-form-input size="sm" class="mr-sm-2" placeholder="Keresés" v-model="searchData"></b-form-input>
              <pre>{{searchData}}</pre>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Keresés</b-button>
            </b-form>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationComponent',
  computed: mapState({
    user: (state) => state.auth.user,
    items: (state) => state.product.photos
  }),
  data: () => ({
    searchData: '',
    allDisplay: []
  }),
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
    search () {
      const result = this.items.map((item) => {
        return item.title
      })
      if (result.indexOf(this.searchData) > -1) {
        const index = result.indexOf(this.searchData)
        this.$store.dispatch('product/search', index)
        this.$router.push('/search')
      } else {
        alert('Nincs találat')
      }
    }
  }
}
</script>
