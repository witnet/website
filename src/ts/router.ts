import VueRouter from 'vue-router'
import {FAQSection, LandingSection} from '../components/sections'
import {MainLayout} from '../components/layouts'

const routes = [
  { path: '/', component: MainLayout, children: [
      { path: '/landing', name: 'landing', component: LandingSection, alias: '/' },
      { path: '/faq', name: 'faq', component: FAQSection, alias: '/' }
  ] }
]

export const router = new VueRouter({routes})