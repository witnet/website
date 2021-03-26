<template>
  <SectionLayout class="join-community-section">
    <i18n path="join_community.text" class="text" tag="h4">
      <a class="underline" :href="urls.telegram" target="_blank"> Telegram </a>
      <a class="underline" :href="urls.discord" target="_blank"> Discord </a>
    </i18n>
  </SectionLayout>
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
.join-community-section {
  background-color: $green-1;
  color: $white;
  justify-content: center;
  display: flex;
  padding: 32px;
}
</style>
