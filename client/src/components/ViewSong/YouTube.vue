<template>
  <Panel title="Youtube Video">
    {{youtubeId}}
    <youtube :video-id="youtubeId" :player-width="500" :player-height="200">
    </youtube>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel'
import YouTube from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId '
  ],
  components: {
    Panel,
    YouTube
  }
}
</script>

<style scoped>
</style>
