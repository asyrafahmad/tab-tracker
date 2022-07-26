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
                <v-btn v-if="isUserLoggedIn && !bookmark" dark class="cyan" @click="setAsBookmark" >
                    Set As  Bookmark
                </v-btn>
                <v-btn v-if="isUserLoggedIn && bookmark" dark class="cyan" @click="unsetAsBookmark" >
                    Unset As Bookmark
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
      bookmark: null
    }
  },
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      try {
        this.bookmark = (await BookmarksService.indexClient({
          songId: this.song.id,
          userId: this.user.id
        })).data

        if (this.bookmark.length) {
          this.bookmark = bookmarks[0]
        }

        // this.isBookmarked = !!this.bookmark
        console.log('bookmark: ', this.isBookmarked)
      } catch (err) {
        console.log('Mounted'.err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.postClient({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
        console.log('set as bookmark')
      } catch (err) {
        console.log(err)
        console.log('fail to set as bookmark')
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.deleteClient(this.bookmark.id)
        this.bookmark = null
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
