<template>
  <SectionLayout class="announcement-section">
    <div class="wrapper">
      <div class="announcement-content">
        <p class="tag">ANNOUNCEMENT</p>
        <h4 class="subtitle">Witnet is now side-chanined to Ethereum</h4>
      </div>
      <Button type="primary" :font-size="14">
        Learn how to use Witnet from a solidity contract
      </Button>
    </div>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/layouts/SectionLayout.vue'
export default {
  name: 'Announcement',
  components: {
    SectionLayout,
  },
}
</script>

<style scoped lang="scss">
.announcement-section {
  background: $grey-0;
  display: flex;
  justify-content: center;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    width: 1280px;
    .announcement-content {
      width: fit-content;
      .tag {
        color: $grey-2;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 1200px) {
  .announcement-section {
    padding: 24px 40px;
    height: max-content;
    .announcement-content {
      margin-bottom: 16px;
    }
  }
  .button {
    width: 300px;
    white-space: unset;
  }
}
</style>
