<template>
  <div class="announcement">
    <div class="wrapper">
      <div class="announcement-content">
        <p class="tag">ANNOUNCEMENT</p>
        <h2 class="subtitle">Witnet is now side-chanined to Ethereum</h2>
      </div>
      <Button color="black" :font-size="16">
        > Learn how to use Witnet from a solidity contract
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
}
</script>

<style scoped lang="scss">
.announcement {
  padding: 0 180px;
  height: 100px;
  background: #f9f9f9;
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
        font-size: 12px;
        color: #999;
        font-weight: bold;
      }
      .subtitle {
        font-size: 14px;
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .announcement {
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
