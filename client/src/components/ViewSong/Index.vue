<template>
    <div>
        <v-layout>
            <v-flex >
                <song-metadata :song="song" />
            </v-flex>
            <v-flex  class="ml-2">
                <you-tube :youtubeId="song.youtubeId" />
                <br>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex  class="mt-2">
                <tab :song="song" />
            </v-flex>
            <v-flex  class="ml-2">
                <lyrics :song="song" />
            </v-flex>
         </v-layout>
    </div>
</template>

<script>
import {mapState} from 'vuex'

import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.showClient(songId)).data
    console.log(this.song)

    if (this.isUserLoggedIn) {
      SongHistoryService.postClient({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
