import VueRouter from 'vue-router'
import {FAQSection, HomeSection, CommunitySection, ArkSection, TeamSection} from '../components/sections'
import {MainLayout} from '../components/layouts'

const routes = [
  { path: '/', name: 'root', component: MainLayout, children: [
      { path: '/home', name: 'landing', component: HomeSection, alias: '/' },
      { path: '/faq', name: 'faq', component: FAQSection },
      { path: '/team', name: 'team', component: TeamSection },
      { path: '/contact', name: 'contact', component: CommunitySection},
      { path: '/community', name: 'community', component: CommunitySection},
      { path: '/ark', name: 'ark', component: ArkSection}
  ] }
]

function scrollBehavior(to, from, savedPosition): any {
  return { x: 0, y: 0 }
}

export const router = new VueRouter({routes, scrollBehavior})