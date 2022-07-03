<template>
    <panel title="Song Metadata">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>
                <div class="song-artist">
                    {{song.artist}}
                </div>
                <div class="song-genre">
                    {{song.genre}}
                </div>
                <v-btn dark class="cyan" :to="{name: 'song-edit', params: () => { return {songId:song.id}}}" >
                    Edit
                </v-btn>
                <v-btn v-if="isUserLoggedIn && !isBookmarked" dark class="cyan" @click="setAsUnbookmark" >
                    Bookmark
                </v-btn>
                <v-btn v-if="isUserLoggedIn && isBookmarked" dark class="cyan" @click="setAsBookmark" >
                    Unbookmark
                </v-btn>
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl"/>
                <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      isBookmarked: false
    }
  },
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    try {
      const bookmark = (await BookmarksService.indexClient({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      this.isBookmarked = !!bookmark
      console.log('bookmark: ', this.isBookmarked)
    } catch (err) {
      console.log('Mounted'.err)
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        await BookmarksService.postClient({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
        console.log('set as bookmark')
      } catch (err) {
        console.log(err)
      }
    },
    async setAsUnbookmark () {
      try {
        await BookmarksService.deleteClient({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
        console.log('set as unbookmark')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
img{
    width: 80%;
    height: 100%
}
</style>
