<template>
  <div
    class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-black-950 text-white-50 dark:text-wit-blue-500 min-h-screen"
  >
    <NavBar :nav-links="navLinks">
      <template #logo>
        <NuxtLink to="/" rel="home">
          <WitnetLogo />
        </NuxtLink>
      </template>
      <template #build>
        <NuxtLink to="/build" rel="about">{{ $t('build') }}</NuxtLink>
      </template>
      <template #buy>
        <NuxtLink to="/buy" rel="contact">{{ $t('buy') }}</NuxtLink>
      </template>
      <template #stake>
        <NuxtLink to="/stake" rel="contact">{{ $t('stake') }}</NuxtLink>
      </template>
    </NavBar>
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

const navLinks: Array<{ key: string }> = [
  {
    key: 'build',
  },
  {
    key: 'buy',
  },
  {
    key: 'stake',
  },
]
</script>
