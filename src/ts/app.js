import Vue from 'vue'
import VueRouter from 'vue-router'

import {router} from './router'

Vue.use(VueRouter)

const el = '#app'

const app = new Vue({el, router})