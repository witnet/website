<template>
  <div class="links">
    <div class="link-container">
      <a class="link" :href="urls.github" target="_blank">
        <img
          class="logo"
          src="~/assets/svg/socials/github.svg"
          alt="Github"
          aria-hidden="true"
        />
      </a>
      <h4 class="link-title">{{ $t('join-github') }}</h4>
      <p class="link-description">{{ $t('join-github-description') }}</p>
    </div>
    <div class="link-container">
      <a class="link" :href="urls.telegram" target="_blank">
        <img
          class="logo"
          src="~/assets/svg/socials/telegram.svg"
          alt="Telegram"
          aria-hidden="true"
        />
      </a>
      <h4 class="link-title">{{ $t('join-telegram') }}</h4>
      <p class="link-description">{{ $t('join-telegram-description') }}</p>
    </div>
    <div class="link-container">
      <a class="link" :href="urls.discord" target="_blank">
        <img
          class="logo"
          src="~/assets/svg/socials/discord.svg"
          alt="Discord"
          aria-hidden="true"
        />
      </a>
      <h4 class="link-title">{{ $t('join-discord') }}</h4>
      <p class="link-description">{{ $t('join-discord-description') }}</p>
    </div>
    <div class="link-container">
      <a class="link" :href="urls.twitter" target="_blank">
        <img
          class="logo"
          src="~/assets/svg/socials/twitter.svg"
          alt="Twitter"
          aria-hidden="true"
        />
      </a>
      <h4 class="link-title">{{ $t('join-twitter') }}</h4>
      <p class="link-description">{{ $t('join-twitter-description') }}</p>
    </div>
    <div class="link-container">
      <a class="link" :href="urls.email" target="_blank">
        <img
          class="logo"
          src="~/assets/svg/socials/email.svg"
          alt="Twitter"
          aria-hidden="true"
        />
      </a>
      <h4 class="link-title">{{ $t('join-email') }}</h4>
      <p class="link-description">{{ $t('join-email-description') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { urls } from '@/constants'
</script>

<style lang="scss" scoped>
.links {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 24px;
  justify-items: flex-start;
  row-gap: 24px;
  .link-container {
    display: grid;
    column-gap: 16px;
    grid-template-rows: max-content max-content;
    justify-items: flex-start;
    row-gap: 8px;
    align-items: center;
    grid-template-columns: max-content 1fr;
  }
  .link-description {
    color: $white-2;
    margin: 0;
    text-align: start;
    align-self: flex-start;
  }
  .link-title {
    color: $white-2;
    margin: 0;
    text-align: start;
  }
  .link {
    text-decoration: none;
    padding: 24px;
    grid-row: span 2;
    background-color: $green;
    border-radius: 8px;
    font-size: 14px;
  }
  .logo {
    width: 22px;
  }
}
@media (max-width: 600px) {
  .link-container {
    grid-template-columns: 1fr;
    justify-items: flex-start;
  }
  .link {
    grid-row: span 1;
  }
}
</style>
