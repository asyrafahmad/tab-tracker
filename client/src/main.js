// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/Globals/Panel'

Vue.config.productionTip = false

// Set Globally
Vue.component('panel', Panel)

Vue.use(VueYouTubeEmbed)
Vue.use(Vuetify, {
  theme: {
    'primary': '#1976D2'
  }
}
)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
