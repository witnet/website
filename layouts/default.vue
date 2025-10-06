<template>
  <div class="min-h-screen">
    <div
      class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-white dark:text-wit-blue-500 min-h-screen relative"
    >
      <SocialLinks
        class="fixed bottom-2xl left-sm-x-screen lg:left-lg md:left-md z-50 h-max w-auto sm:hidden"
      />
      <NuxtLayout name="navbar">
        <WNavbar :nav-links="navLinks" , :redirection-active="false">
          <template #logo>
            <NuxtLink to="/" aria-label="home" rel="home">
              <WitnetLogo />
            </NuxtLink>
          </template>
        </WNavbar>
      </NuxtLayout>
      <!-- <client-only>
        <ThemeSwitch class="theme-switch" />
        </client-only> -->
      <div class="grid grid-auto mt-8">
        <slot />
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { WNavbar } from 'wit-vue-ui'
import WitnetLogo from '@/assets/svg/witnet-logo.svg?component'
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
    to: 'https://witnet.io/#stake',
    rel: 'stake',
    locale: t('nav_bar.route.stake'),
  },
  {
    key: 'buy',
    active: false,
    to: 'https://witnet.io/#buy',
    rel: 'buy',
    locale: t('nav_bar.route.buy'),
  },
  {
    key: 'build',
    active: false,
    to: 'https://witnet.io/#build',
    rel: 'build',
    locale: t('nav_bar.route.build'),
  },
])
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-enter-from {
  opacity: 0;
}

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
