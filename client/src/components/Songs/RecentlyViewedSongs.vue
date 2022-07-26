<template>
    <panel title="Recently Viewed Songs">
        <!-- <v-data-table :headers="headers" :pagination.sync="pagination" :item="bookmarks">  OLD -->
        <v-data-table :headers="headers" :options.sync="pagination" :item="histories"> <!-- NEW -->
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">
                    {{props.item.title}}
                </td>
                <td class="text-xs-right">
                    {{props.item.artist}}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import { mapState } from 'vuex'
import SongHistoryService from '../../services/SongHistoryService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'title'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.indexClient({
        userId: this.$store.state.user.id
      })).data
    }
  }
}
</script>

<style scoped>
</style>
