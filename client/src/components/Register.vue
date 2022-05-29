<template>
<div>
    <h1>Register</h1>
    <br>
    <input type="email" name="email" placeholder="email" v-model="input_email" />
    <br>
    <input type="password" name="password" placeholder="password" v-model="input_password"/>
    <br/>
    <div class="error" v-html="error" />
    <br/>
    <button @click="registerBtn">Register</button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
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
    setTimeout(() => {
      this.input_email = 'Time out'
    }, 2000)
  }
}
</script>

<style scoped>

.error {
  error: red;
}

</style>
