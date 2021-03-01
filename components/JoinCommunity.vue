<template>
  <SectionLayout class="join-community-section">
    <h4>Questions? Join the Telegram and Discord communities!</h4>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  name: 'JoinCommunity',
  components: {
    SectionLayout,
  },
}
</script>

<style lang="scss" scoped>
.join-community-section {
  background-color: $blue-4;
  color: $white;
  justify-content: center;
  display: flex;
  padding: 32px;
}
</style>
