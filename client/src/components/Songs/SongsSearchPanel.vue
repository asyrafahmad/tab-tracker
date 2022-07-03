<template>
  <panel title="Search Song">
    <v-text-field label="Search by song title, artist, album or genre" v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    /*
      Note:
        // with query, resulting in /register?plan=private
        router.push({ path: 'register', query: { plan: 'private' }})
    */
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
      console.log(value)
    }, 700),

    '$route.query.search': { // search on url will display in text field
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
</style>
