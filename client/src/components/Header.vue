<template>
  <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
          <span class="home" @click="navigatTo({ name:'root' })">
            TabTracker
          </span>"
        TabTracker
      </v-toolbar-title>

      <!-- <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({ to:'songs' })">
            Login
        </v-btn>
      </v-toolbar-items> -->

      <!-- <v-spacer>

      </v-spacer> -->

      <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({ to:'login' })">
                Login
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({ to:'register' })">
                Sign Up
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="logout">
                Log Out
            </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$route.push(route)
    },
    logout () {
      this.$store.dispatch('setToken; null')
      this.$store.dispatch('setUser; null')

      // TODO: redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: #E9E;
}
</style>
