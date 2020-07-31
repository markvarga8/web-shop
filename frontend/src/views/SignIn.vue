<template>
  <div>
    <b-form @submit.prevent="signin">
      <h1>Bejelentkezés</h1>
      <b-form-group label="Email">
        <b-form-input type="email" v-model="user.email" />
      </b-form-group>
      <b-form-group label="Jelszó">
        <b-form-input type="password" v-model="user.password" />
      </b-form-group>
      <div class="text-right">
        <b-button variant="outline-success" type="submit" class="mr-2">Sign in</b-button>
      </div>
    </b-form>
    <a href="/registration">Ha nincs még fiókod kattints ide a regisztrációhoz</a>
  </div>
</template>

<script>
import UserDto from '../dtos/UserDto'

export default {
  name: 'signin',
  data: () => ({
    user: new UserDto()
  }),
  methods: {
    async signin () {
      await this.$store.dispatch('auth/signin', this.user)
      if (this.$store.state.auth.user) {
        this.$router.push('/')
      } else {
        this.error = this.$store.state.auth.error
      }
    }
  }
}
</script>
