<template>
    <panel title="Lyrics">
        <textarea readonly v-model="song.lyrics" class="tab_style">
        </textarea>
    </panel>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
    width: 200%;
    font-family: monospace;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}

.tab_style{
  color: red
}
</style>
