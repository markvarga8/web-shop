<template>
  <div>
    <h1>Regisztráció</h1>
    <b-form @submit.prevent="register">
      <b-form-group label="Vezetéknév">
        <b-form-input type="text" v-model="user.lastname" />
      </b-form-group>
      <b-form-group label="Keresztnév">
        <b-form-input type="text" v-model="user.firstname" />
      </b-form-group>
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
  </div>
</template>

<script>
import UserDto from '../dtos/UserDto'
import axios from 'axios'

export default {
  name: 'registration',
  data: () => ({
    user: new UserDto()
  }),
  methods: {
    async register () {
      try {
        await axios.post(`${process.env.VUE_APP_API_ENDPOINT}/registration`, this.user)
        this.$router.push('/signin?success=true')
      } catch (err) {
        this.error = err.response.data
      }
    }
  }
}
</script>
