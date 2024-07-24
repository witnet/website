<template>
  <div
    class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-white dark:text-wit-blue-500 min-h-screen relative"
  >
    <SocialLinks
      class="fixed bottom-2xl left-sm-x-screen lg:left-lg md:left-md z-50 h-max w-auto sm:hidden"
    />
    <NuxtLayout name="navbar">
      <TopBar :nav-links="navLinks">
        <template #logo>
          <NuxtLink to="/" rel="home">
            <WitnetLogo />
          </NuxtLink>
        </template>
        <template v-for="link in navLinks" :key="link.key" #[link.key]>
          <InnerLink
            :hash="link.key"
            class="text font-[500] flex cursor-pointer sm:text-white-50 relative p-[8px] m-[-8px] pl-[16px]"
            @mouseover="activateLink(link)"
            @mouseleave="clearActiveLinks"
          >
            <NavigationCursor
              v-if="link.active"
              class="w-sm h-auto absolute top-[16px] left-[4px]"
            /><span /><span class="slash text-wit-blue-500">/</span
            >{{ t(link.locale) }}
          </InnerLink>
        </template>
      </TopBar>
    </NuxtLayout>
    <!-- <Compoennt /> -->
    <!-- <client-only>
      <ThemeSwitch class="theme-switch" />
      </client-only> -->
    <div class="grid grid-auto mt-8">
      <slot></slot>
    </div>
    <!-- <FooterSection /> -->
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import WitnetLogo from '@/assets/svg/witnet-logo.svg?component'
import NavigationCursor from '@/assets/svg/navigation-cursor.svg?component'
const { t } = useI18n()
type NavLink = {
  key: string
  active: boolean
  to: string
  rel: string
  locale: string
}

const navLinks: Ref<Array<NavLink>> = ref([
  {
    key: 'stake',
    active: false,
    to: '/stake',
    rel: 'stake',
    locale: 'nav_bar.route.stake',
  },
  {
    key: 'buy',
    active: false,
    to: '/buy',
    rel: 'buy',
    locale: 'nav_bar.route.buy',
  },
  {
    key: 'build',
    active: false,
    to: '/build',
    rel: 'build',
    locale: 'nav_bar.route.build',
  },
])
function activateLink(link: NavLink) {
  link.active = true
}
function clearActiveLinks() {
  navLinks.value.forEach((link) => (link.active = false))
}
</script>

<style lang="scss">
.logo-link {
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 170px;
    height: auto;
  }
}
</style>
