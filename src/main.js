// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vodal from '../node_modules/vodal/dist/index.js'
Vue.component(Vodal.name, Vodal)

import {StfSelect, StfSelectOption} from '../node_modules/stf-vue-select/dist/lib/stf-vue-select.min.js'
import '../node_modules/stf-vue-select/dist/lib/stf-vue-select.min.css'

Vue.component('stf-select-option', StfSelectOption)
Vue.component('stf-select', StfSelect)

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
