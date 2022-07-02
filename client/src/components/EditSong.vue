<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field label="Title" required :rules="[required]" v-model="song.title"></v-text-field>
        <v-text-field label="Artist" v-model="song.artist"></v-text-field>
        <v-text-field label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field label="Album" v-model="song.album"></v-text-field>
        <v-text-field label="Album Image Url" v-model="song.albumImageUrl"></v-text-field>
        <v-text-field label="Youtube ID" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field label="Tab" multi-line v-model="song.tab"></v-text-field>
        <v-text-field label="Lyrics" v-model="song.lyrics"></v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div><br>
      <v-btn dark class="cyan" @click="save">Save Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
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
    async save () {
      this.error = null
      // Note: Input checking validation
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return this.error
      }

      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.putClient(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    // call API
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.showClient(songId)).data

      await SongsService.showClient(this.song)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
