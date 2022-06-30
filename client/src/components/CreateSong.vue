<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Metadata">
        <v-text-field label="Title" required :rules="[required]" v-model="song.title"></v-text-field>
        <v-text-field label="Artist" v-model="song.artist"></v-text-field>
        <v-text-field label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field label="Album" v-model="song.album"></v-text-field>
        <v-text-field label="Album Image Url" v-model="song.albumImageUrl"></v-text-field>
        <v-text-field label="Youtube ID" v-model="song.youtubeId"></v-text-field>
      </Panel>
    </v-flex>

    <v-flex xs8>
      <Panel title="Song Structure" class="ml-4">
        <v-text-field label="Tab" multi-line v-model="song.tab"></v-text-field>
        <v-text-field label="Lyrics" v-model="song.lyrics"></v-text-field>
      </Panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div><br>
      <v-btn dark class="cyan" @click="createSongBtn">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async createSongBtn () {
      this.error = null
      // Note: Input checking validation
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      // call API
      try {
        await SongsService.createClient(this.song)
        this.$router.push({ // navigate to '/songs' page
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
