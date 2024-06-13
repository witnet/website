<template>
  <div
    class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-white dark:text-wit-blue-500 min-h-screen flex"
  >
    <NavBar :nav-links="navLinks">
      <template #logo>
        <NuxtLink to="/" rel="home">
          <WitnetLogo />
        </NuxtLink>
      </template>
      <template v-for="link in navLinks" :key="link.key" #[link.key]>
        <InnerLink :hash="link.key">
          <span class="slash">/</span>{{ link.locale }}
        </InnerLink>
      </template>
    </NavBar>
    <!-- <Compoennt /> -->
    <!-- <client-only>
      <ThemeSwitch class="theme-switch" />
    </client-only> -->
    <div class="grid grid-auto mt-16">
      <slot></slot>
    </div>
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import WitnetLogo from '@/assets/svg/witnet-logo.svg?component'
const { t } = useI18n()

const navLinks: Array<{ key: string }> = [
  {
    key: 'oracle',
    to: '/oracle',
    rel: 'oracle',
    locale: t('nav_bar.route.oracle'),
  },
  {
    key: 'coin',
    to: '/coin',
    rel: 'coin',
    locale: t('nav_bar.route.coin'),
  },
  {
    key: 'apps',
    to: '/apps',
    rel: 'apps',
    locale: t('nav_bar.route.apps'),
  },
  {
    key: 'community',
    to: '/community',
    rel: 'community',
    locale: t('nav_bar.route.community'),
  },
]
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
    width: 200px;
    height: auto;
  }
}
</style>
