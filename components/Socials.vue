<template>
  <div class="links">
    <a class="link" :href="urls.github" target="_blank">
      <img
        class="logo"
        src="@/assets/images/github.svg"
        alt="Github"
        aria-hidden="true"
      />
    </a>
    <a class="link" :href="urls.telegram" target="_blank">
      <img
        class="logo"
        src="@/assets/images/telegram.svg"
        alt="Telegram"
        aria-hidden="true"
      />
    </a>
    <a class="link" :href="urls.discord" target="_blank">
      <img
        class="logo"
        src="@/assets/images/discord.svg"
        alt="Discord"
        aria-hidden="true"
      />
    </a>
    <a class="link" :href="urls.twitter" target="_blank">
      <img
        class="logo"
        src="@/assets/images/twitter.svg"
        alt="Twitter"
        aria-hidden="true"
      />
    </a>
    <a class="link" :href="urls.reddit" target="_blank">
      <img
        class="logo"
        src="@/assets/images/reddit.svg"
        alt="Reddit"
        aria-hidden="true"
      />
    </a>
    <a class="link" :href="urls.youtube" target="_blank">
      <img
        class="logo"
        src="@/assets/images/youtube.svg"
        alt="Github"
        aria-hidden="true"
      />
    </a>
  </div>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      urls,
    }
  },
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  margin-bottom: 24px;
  .link {
    margin-right: 24px;
    .logo {
      width: 22px;
    }
  }
}
</style>
