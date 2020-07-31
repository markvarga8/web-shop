<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">SHOP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="user" @click="logout()">Kijelentkezés</b-nav-item>
          <b-nav-item v-if="!user" href="/signin">Saját fiók</b-nav-item>
          <b-nav-item href="#">Kedvencek</b-nav-item>
          <b-nav-item href="/product">Termékek</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item href="#">
              <b-icon-basket class="h2 m-2"></b-icon-basket>
            </b-nav-item>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Keresés"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Keresés</b-button>
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
    user: (state) => state.auth.user
  }),
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>
