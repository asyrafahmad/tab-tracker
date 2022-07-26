<template>
  <v-toolbar fixed class="cyan" dark>
      <!-- Old version navigation router link -->
      <!-- <v-toolbar-title class="mr-4">
          <span class="home" @click="navigatTo({ name:'songs' })">
            TabTracker
          </span>"
        TabTracker
      </v-toolbar-title> -->

      <!-- New version navigation router link -->
      <v-toolbar-title class=mt-4>
        <router-link class="home" :to="{ name:'songs' }">
            TabTracker
        </router-link>
      </v-toolbar-title>

      <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{ name:'login' }">
                Login
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{ name:'register' }">
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
    // * Old version navigation router link *
    // navigateTo (route) {
    //   this.$route.push(route)
    // },
    logout () {
      this.$store.dispatch('setToken; null')
      this.$store.dispatch('setUser; null')

      // TODO: redirect to homepage
      this.$router.push({
        name: 'songs'
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
