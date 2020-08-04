<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">SHOP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!user" href="/signin">Saját fiók</b-nav-item>
          <b-nav-item href="/product">Termékek</b-nav-item>
          <b-nav-item href="/basket">Kosár</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form @submit.prevent="search">
              <b-row>
                <b-col>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Keresés" v-model="searchData"></b-form-input>
                </b-col>
                <b-col>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Keresés</b-button>
                </b-col>
              </b-row>
            </b-form>
            <b-nav-item v-if="user" @click="logout()">
              <b-button variant="secondary" class="mr-sm-2">
                <b-icon icon="power" aria-hidden="true"></b-icon> {{user.firstname}}
              </b-button>
            </b-nav-item>
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

<style>
  li {
    list-style-type: none;
  }
</style>
