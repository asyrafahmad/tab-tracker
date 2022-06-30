<template>
  <div class="white elevation-2">
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
      <v-toolbar-title >{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>
    <br>

    <div clas="pl-4 pr-4 pt-2 pb-2">
        <slot>
            Slot content defined
        </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
