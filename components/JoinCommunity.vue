<template>
  <SectionLayout class="join-community-section">
    <h4 class="text">{{ $t('join_community.text') }}</h4>
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
  background-color: $green-1;
  color: $white;
  justify-content: center;
  display: flex;
  padding: 32px;
}
</style>
