<template>
  <SectionLayout
    class="join-community-section"
    :full-background="true"
    background-color="#41bea5"
  >
    <i18n path="join_community.text" class="text header-4" tag="h3">
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
  text-align: center;
}
</style>
