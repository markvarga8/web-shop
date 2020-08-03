<template>
  <div>
    <h1>Regisztráció</h1>
    <b-form @submit.prevent="register">
      <b-form-group label="Vezetéknév">
        <b-form-input type="text" v-model="user.lastname" @input="$v.user.lastname.$touch()" />
        <b-alert show variant="danger" v-if="getFieldBackendError('lastname')">
          {{getFieldBackendError('lastname').message}}
        </b-alert>
        <div v-if="$v.user.lastname.$dirty">
          <b-alert show variant="danger" v-if="!$v.user.lastname.required">
            Vezetéknév kötelező!
          </b-alert>
          <b-alert show variant="danger" v-if="!$v.user.lastname.minLength">
            Minimum 3 karakter hosszú vezetéknév szükséges!
          </b-alert>
        </div>
      </b-form-group>

      <b-form-group label="Keresztnév">
        <b-form-input type="text" v-model="user.firstname" @input="$v.user.firstname.$touch()" />
        <b-alert show variant="danger" v-if="getFieldBackendError('firstname')">
          {{getFieldBackendError('firstname').message}}
        </b-alert>
        <div v-if="$v.user.firstname.$dirty">
          <b-alert show variant="danger" v-if="!$v.user.firstname.required">
            Keresztnév kötelező!
          </b-alert>
          <b-alert show variant="danger" v-if="!$v.user.firstname.minLength">
            Minimum 3 karakter hosszú kersztnév szükséges!
          </b-alert>
        </div>
      </b-form-group>

      <b-form-group label="Email">
        <b-form-input type="email" v-model="user.email" @input="$v.user.email.$touch()" />
        <b-alert show variant="danger" v-if="getFieldBackendError('email')">
          {{getFieldBackendError('email').message}}
        </b-alert>
        <div v-if="$v.user.email.$dirty">
          <b-alert show variant="danger" v-if="!$v.user.email.required">
            Email cím kötelező!
          </b-alert>
          <b-alert show variant="danger" v-if="!$v.user.email.email">
             Kérjük adjon meg valid email címet!
          </b-alert>
        </div>
      </b-form-group>

      <b-form-group label="Jelszó">
        <b-form-input type="password" v-model="user.password" @input="$v.user.password.$touch()" />
        <b-alert show variant="danger" v-if="getFieldBackendError('password')">
          {{getFieldBackendError('password').message}}
        </b-alert>
        <div v-if="$v.user.password.$dirty">
          <b-alert show variant="danger" v-if="!$v.user.password.required">
            Jelszó kötelező!
          </b-alert>
          <b-alert show variant="danger" v-if="!$v.user.password.minLength">
            Minimum 6 karakter hosszú jelszó szükséges!
          </b-alert>
        </div>
      </b-form-group>

      <b-form-group label="Repeat password">
        <b-form-input type="password" v-model="repeatPassword" @input="$v.repeatPassword.$touch()" />
        <div v-if="$v.repeatPassword.$dirty">
          <b-alert show variant="danger" v-if="!$v.repeatPassword.required">
            Jelszó imétlése kötelező!
          </b-alert>
          <b-alert show variant="danger" v-if="!$v.repeatPassword.sameAsPassword">
            A két jelszó nem egyezik!
          </b-alert>
        </div>
      </b-form-group>

      <div class="text-right">
        <b-button variant="secondary" type="submit" class="mr-2">Regisztráció</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import UserDto from '../dtos/UserDto'
import axios from 'axios'
import {
  required,
  minLength,
  email,
  sameAs
} from 'vuelidate/lib/validators'

export default {
  name: 'registration',
  data: () => ({
    user: new UserDto(),
    repeatPassword: ''
  }),
  methods: {
    getFieldBackendError (field) {
      return this.error?.errors?.find((error) => error.path === field)
    },
    async register () {
      try {
        await axios.post(`${process.env.VUE_APP_API_ENDPOINT}/registration`, this.user)
        this.$router.push('/')
      } catch (err) {
        this.error = err.response.data
      }
    }
  },
  validations: {
    user: {
      firstname: { required, minLength: minLength(3) },
      lastname: { required, minLength: minLength(3) },
      email: { required, email },
      password: { required, minLength: minLength(6) }
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs(function getPassword () { return this.user.password })
    }
  }
}
</script>
