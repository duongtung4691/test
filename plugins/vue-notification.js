import Vue from 'vue'
import VueNotifications from 'vue-notification'
import Active from './active.js'
import MyPlugin from './others/plugins.js'
import Jquery from 'jquery/src/jquery'
import Popper from './bootstrap/popper.min.js'
import Bootstrap from './bootstrap/bootstrap.min.js'
Vue.use(Active)
Vue.use(MyPlugin)
Vue.use(Jquery)
Vue.use(Popper)
Vue.use(Bootstrap)
Vue.use(VueNotifications)
