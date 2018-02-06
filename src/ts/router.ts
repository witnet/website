import VueRouter from 'vue-router'
import {FAQSection, HomeSection, ContactSection, ArkSection} from '../components/sections'
import {MainLayout} from '../components/layouts'

const routes = [
  { path: '/', name: 'root', component: MainLayout, children: [
      { path: '/home', name: 'landing', component: HomeSection, alias: '/' },
      { path: '/faq', name: 'faq', component: FAQSection },
      { path: '/contact', name: 'contact', component: ContactSection},
      { path: '/ark', name: 'ark', component: ArkSection}
  ] }
]

function scrollBehavior(to, from, savedPosition): any {
  return { x: 0, y: 0 }
}

export const router = new VueRouter({routes, scrollBehavior})