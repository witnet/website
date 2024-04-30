<template>
  <div class="socials-container">
    <IconExternalLink :url="URLS.twitter" :icon="Twitter" />
    <IconExternalLink :url="URLS.telegram" :icon="Telegram" />
    <IconExternalLink :url="URLS.discord" :icon="Discord" />
    <IconExternalLink :url="URLS.github" :icon="Github" />
  </div>
</template>
<script setup lang="ts">
import Twitter from '@/assets/svg/socials/twitter.svg'
import Telegram from '@/assets/svg/socials/telegram.svg'
import Discord from '@/assets/svg/socials/discord.svg'
import Github from '@/assets/svg/socials/github.svg'
import { URLS } from '@/constants'
</script>
