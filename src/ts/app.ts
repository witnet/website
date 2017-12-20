import Vue from 'vue'
import VueRouter from 'vue-router'

import {router} from './router'

declare global {
  const require: any
}

Vue.use(VueRouter)

const el: string = '#app'

new Vue({el, router})