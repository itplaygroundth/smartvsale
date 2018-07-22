// import 'es6-promise/auto'
import '@babel/polyfill'



import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
import axios from 'axios'
import './i18n'
import VueSweetalert2 from 'vue-sweetalert2'
import './plugins/vuetify'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css' 

Vue.use(Vuetify,{iconfont: 'mdi',theme:{
  primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
}
})
Vue.use(VueAxios,axios)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

// let mediaHandler = () => {
//   if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
//     store.dispatch('toggleSidebar', true)
//   } else {
//     store.dispatch('toggleSidebar', false)
//   }
// }

// router.beforeEach((to, from, next) => {
//   store.commit('setLoading', true)
//   next()
// })

// router.afterEach((to, from) => {
//   mediaHandler()
//   store.commit('setLoading', false)
// })

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')


