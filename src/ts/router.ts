import VueRouter from 'vue-router'
import {FAQSection, HomeSection} from '../components/sections'
import {MainLayout} from '../components/layouts'

const routes = [
  { path: '/', name: 'root', component: MainLayout, children: [
      { path: '/home', name: 'landing', component: HomeSection, alias: '/' },
      { path: '/faq', name: 'faq', component: FAQSection }
  ] }
]

export const router = new VueRouter({routes})