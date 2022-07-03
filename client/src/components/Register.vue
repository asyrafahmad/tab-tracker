<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="input_email"> </v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="input_password"> </v-text-field>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn class="cyan" dark @click="registerBtn">Register</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  watch: {
    input_email (value) {
      console.log('Email has changed', value)
    },
    input_password (value) {
      console.log('Password has changed', value)
    }
  },
  methods: {
    async registerBtn () {
      try {
        const response = await AuthenticationService.register({
          email: this.input_email,
          password: this.input_password
        })
        console.log(response)
        this.$store.dispatch('setToken', response.data.token) // vuex
        this.$store.dispatch('setUser', response.data.user) // vuex
        this.$store.push({
          name: 'songs'
        }) // vuex
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },

  data () {
    return {
      input_email: '',
      input_password: '',
      error: null
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.input_email = 'Time out'
    // }, 2000)
  }
}
</script>

<style scoped>
</style>
