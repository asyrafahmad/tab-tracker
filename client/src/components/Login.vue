<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <div clas="pl-4 pr-4 pt-2 pb-2">
          <h1>Login</h1>
          <v-text-field label="Email" type="email" v-model="input_email"> </v-text-field>
          <br>
          <v-text-field label="Password" type="password" autocomplete="new-password" v-model="input_password"> </v-text-field>
          <br/>
          <div class="error" v-html="error" />
          <br/>
          <v-btn class="cyan" dark @click="loginBtn">Login</v-btn>
      </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  watch: {
    input_email (value) {
      console.log('Email has changed', value)
    },
    input_password (value) {
      console.log('Password has changed', value)
    }
  },
  methods: {
    async loginBtn () {
      try {
        const response = await AuthenticationService.login({
          email: this.input_email,
          password: this.input_password
        })
        console.log(response)

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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

.error {
  color: red;
}

</style>
