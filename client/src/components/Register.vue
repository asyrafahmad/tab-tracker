<template>
<div>
    <h1>Register</h1>
    <br>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br>
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <br/>
    <button @click="registerBtn">Register</button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  watch: {
    email (value) {
      console.log('Email has changed', value)
    },
    password (value) {
      console.log('Password has changed', value)
    }
  },
  methods: {
    async registerBtn () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  },

  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'Time out'
    }, 2000)
  }
}
</script>
