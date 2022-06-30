<template>
    <panel title="SOng Metadata">
        <div>
            {{song.title}}
        </div>
    </panel>
</template>

<script>
import SongsService from '../services/SongsService'
import Panel from '../services/Panel'

export default {
    data () {
        return {
            song: { }
        }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = await SongsService.show();
    },
    components: {
        Panel
    }
}
</script>

<style scoped></style>
