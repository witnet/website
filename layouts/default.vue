<template>
  <div
    class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-white dark:text-wit-blue-500 min-h-screen relative"
  >
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
            class="text font-[500] flex cursor-pointer sm:text-white-50"
            @mouseover="activateLink(link)"
            @mouseleave="clearActiveLinks"
          >
            <NavigationCursor v-if="link.active" class="w-sm h-auto" /><span
              class="slash text-wit-blue-500"
              >/</span
            >{{ link.locale }}
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

const navLinks: Array<{ key: string }> = ref([
  {
    key: 'stake',
    active: false,
    to: '/stake',
    rel: 'stake',
    locale: t('nav_bar.route.stake'),
  },
  {
    key: 'buy',
    active: false,
    to: '/buy',
    rel: 'buy',
    locale: t('nav_bar.route.buy'),
  },
  {
    key: 'build',
    active: false,
    to: '/build',
    rel: 'build',
    locale: t('nav_bar.route.build'),
  },
])
function activateLink(link) {
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
