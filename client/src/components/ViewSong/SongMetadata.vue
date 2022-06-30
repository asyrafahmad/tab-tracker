<template>
    <Panel title="Song Metadata">
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
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" width="80%" height="100%"/>
                <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>
