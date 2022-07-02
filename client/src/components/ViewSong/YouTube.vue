<template>
  <panel title="Youtube Video">
    {{youtubeId}}
    <youtube :video-id="youtubeId" :player-width="500" :player-height="200">
    </youtube>
  </panel>
</template>

<script>
import YouTube from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId '
  ],
  components: {
    YouTube
  }
}
</script>

<style scoped>
</style>
