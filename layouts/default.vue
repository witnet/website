<template>
  <div
    class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-white dark:text-wit-blue-500 min-h-screen flex"
  >
  <!-- TODO: adjust the size
  <div class="max-w-6xl px-10 pt-40 mx-auto  dark:text-wit-blue-500 min-h-screen"> -->
  <div class="flex">
    <div class="logo-link">
      <NuxtLink to="/" rel="home">
        <WitnetLogo />
      </NuxtLink>
    </div>
    <NavBar :nav-links="navLinks" />
  </div>
    <!-- <Compoennt /> -->
    <client-only>
      <ThemeSwitch class="theme-switch" />
    </client-only>
    <div class="grid grid-auto mt-16">
      <slot></slot>
    </div>
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import WitnetLogo from '@/assets/svg/witnet-logo.svg?component'

const navLinks: Array<{ key: string, to: string, rel: string }> = [
  {
    key: 'oracle',
    to: '/oracle',
    rel: 'oracle',
  },
  {
    key: 'coin',
    to: '/coin',
    rel: 'coin'
  },
  {
    key: 'apps',
    to: '/apps',
    rel: 'apps'
  },
  {
    key: 'community',
    to: '/community',
    rel: 'community'
  }
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