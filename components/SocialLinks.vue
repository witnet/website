<template>
  <div
    class="h-[90vh] max-h-[900px] grid gap-y-4 auto-rows-min content-center gap-y-md justify-items-end opacity-60 hover:opacity-100"
  >
    <IconExternalLink :url="URLS.x" :icon="Twitter" />
    <IconExternalLink :url="URLS.telegram" :icon="Telegram" />
    <IconExternalLink :url="URLS.discord" :icon="Discord" />
    <IconExternalLink :url="URLS.github" :icon="Github" />
    <div class="flex mt-3xl">
      <p
        class="text-sm font-light text-white-300 [writing-mode:vertical-lr] -rotate-180 subtitle"
      >
        {{ $t('socials-title-1') }}
      </p>
      <p
        class="text-sm font-light text-white-300 [writing-mode:vertical-lr] -rotate-180 subtitle"
      >
        {{ $t('socials-title-2') }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Twitter from '@/assets/svg/socials/twitter.svg?component'
import Telegram from '@/assets/svg/socials/telegram.svg?component'
import Discord from '@/assets/svg/socials/discord.svg?component'
import Github from '@/assets/svg/socials/github.svg?component'
import { URLS } from '@/constants'
</script>
