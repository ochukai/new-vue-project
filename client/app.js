import Vue from 'vue'
import App from './components/App'

import VueResource from 'vue-resource'
Vue.use(VueResource)

// mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import { Button, Toast, InfiniteScroll } from 'mint-ui'
// Vue.component(Button.name, Button)
// Vue.component(Toast.name, Toast)
// Vue.use(InfiniteScroll)


import {sync} from 'vuex-router-sync'
import router from './router'
import store from './store'
sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
