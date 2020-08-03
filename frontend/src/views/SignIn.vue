<template>
  <div>
    <b-form @submit.prevent="signin">
      <h1>Saját fiók</h1>
      <b-alert show variant="success" class="mt-3 text-center" v-if="justVerified">
        Üdv {{firstname}}, sikeres regisztráció!
      </b-alert>
      <b-alert show variant="success" class="mt-3 text-center" v-if="justRegistered">
        Sikeres regisztráció. Ellenőrizze email fiókját!
      </b-alert>
        <b-alert show variant="danger" v-if="error">{{error.error}}</b-alert>
      <b-form-group label="Email">
        <b-form-input type="email" v-model="user.email" @input="$v.user.email.$touch()" />
        <div v-if="$v.user.email.$dirty">
          <b-alert show variant="danger" v-if="!$v.user.email.required" >
            Email megadása kötelező!
          </b-alert>
          <b-alert show variant="danger" v-if="!$v.user.email.email">
            Nem valid email!
          </b-alert>
        </div>
      </b-form-group>
      <b-form-group label="Jelszó">
        <b-form-input type="password" v-model="user.password" @input="$v.user.password.$touch()" />
         <div v-if="$v.user.password.$dirty">
          <b-alert show variant="danger" v-if="!$v.user.password.required">
            Jelszó megadása kötelező!
          </b-alert>
        </div>
      </b-form-group>
      <div class="text-right">
        <b-button variant="secondary" type="submit" class="mr-2">Bejelentkezés</b-button>
      </div>
    </b-form>
    <p>
      <a href="/registration">Regisztrációhoz kattints ide</a>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import UserDto from '../dtos/UserDto'

export default {
  name: 'signin',
  computed: mapState({
    firstname: (state) => state.auth.user.firstname,
    lastname: (state) => state.auth.user.lastname
  }),
  data: () => ({
    user: new UserDto(),
    justVerified: false,
    justRegistered: false,
    error: null
  }),
  methods: {
    async signin () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      await this.$store.dispatch('auth/signin', this.user)
      if (this.$store.state.auth.user) {
        this.$router.push('/')
      } else {
        this.error = this.$store.state.auth.error
      }
    }
  },
  validations: {
    user: {
      email: { required, email },
      password: { required }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (from.path === '/registration/verify') {
        vm.justVerified = true; //eslint-disable-line
      }
      if (from.path === '/registration' && to.query.success) {
        vm.justRegistered = true; //eslint-disable-line
      }
    })
    next()
  }
}
</script>
