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
        <WIconText
          v-for="social in socials"
          :key="social.name"
          :dark="true"
          class="w-72 mb-4 sm:mb-0 cursor-pointer"
          :text="social.name"
          :link="social.url"
          :position="IconTextPosition.Right"
          :bold="true"
          :rounded="true"
        >
          <WIcon :name="social.icon" />
        </WIconText>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { WIconText, WIcon, IconName, IconTextPosition } from 'wit-vue-ui'
import { URLS } from '@/constants'

const { t } = useI18n()

const socials = [
  {
    name: 'Twitter',
    icon: IconName.X,
    url: URLS.x,
  },
  {
    name: 'Telegram',
    icon: IconName.Telegram,
    url: URLS.telegram,
  },
  {
    name: 'Discord',
    icon: IconName.Discord,
    url: URLS.discord,
  },
  {
    name: 'Github',
    icon: IconName.Github,
    url: URLS.github,
  },
]
</script>
