<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-black-950'"
    :content-classes="'grid justify-items-center gap-lg'"
  >
    <template #content>
      <i18n-t
        keypath="community.title.text"
        class="title-h2 text-white-50"
        tag="h2"
        scope="global"
      >
        <span class="text-wit-blue-500">{{ $t('community.title.dot') }}</span>
      </i18n-t>
      <p class="text text-center text-white-50">
        {{ t('community.description') }}
      </p>
      <div class="grid grid-cols-2 gap-3xl mt-lg sm:grid-cols-1">
        <IconWithText
          v-for="social in socials"
          :key="social.name"
          :text-color="'text-link-dark'"
          class="w-72 mb-4 sm:mb-0 cursor-pointer"
          :text="social.name"
          :link="social.url"
        >
          <component :is="social.icon" class="community-icon" />
        </IconWithText>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Twitter from '@/assets/svg/socials/twitter.svg?component'
import Telegram from '@/assets/svg/socials/telegram.svg?component'
import Discord from '@/assets/svg/socials/discord.svg?component'
import Github from '@/assets/svg/socials/github.svg?component'
import { URLS } from '@/constants'

const { t } = useI18n()

const socials = [
  {
    name: 'Twitter',
    icon: Twitter,
    url: URLS.x,
  },
  {
    name: 'Telegram',
    icon: Telegram,
    url: URLS.telegram,
  },
  {
    name: 'Discord',
    icon: Discord,
    url: URLS.discord,
  },
  {
    name: 'Github',
    icon: Github,
    url: URLS.github,
  },
]
</script>

<style lang="scss">
.community-icon {
  width: 45px;
  height: 45px;
  .social-icon {
    @apply fill-black-950 !important;
  }
}
</style>
