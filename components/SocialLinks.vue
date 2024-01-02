<template>
  <div class="socials-container">
    <a class="link" :href="URLS.twitter" target="_blank">
      <Twitter class="social-icon" />
    </a>
    <a class="link" :href="URLS.telegram" target="_blank">
      <Telegram class="social-icon" />
    </a>
    <a class="link" :href="URLS.discord" target="_blank">
      <Discord class="social-icon" />
    </a>
    <a class="link" :href="URLS.github" target="_blank">
      <Github class="social-icon" />
    </a>
  </div>
</template>
<script setup lang="ts">
import Twitter from '@/assets/svg/socials/twitter.svg'
import Telegram from '@/assets/svg/socials/telegram.svg'
import Discord from '@/assets/svg/socials/discord.svg'
import Github from '@/assets/svg/socials/github.svg'
import { URLS } from '@/constants'
</script>
<style scoped lang="scss">
.social-icon {
  width: 30px;
  height: auto;
}
</style>
