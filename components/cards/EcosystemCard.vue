<template>
  <div :class="border ? 'card-container border' : 'card-container'">
    <img class="logo" :src="url" alt="logo" />
    <p :class="border ? 'title border' : 'title'">{{ title }}</p>
    <p :class="border ? 'content border' : 'content'">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'EcosystemCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  width: 200px;
  row-gap: 16px;
  text-align: left;
  padding: 24px;
  &.border {
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  .title {
    font-size: 20px;
    color: #12243a;
    font-weight: bold;
    &.border {
      color: #5f5f5f;
    }
  }
  .content {
    font-size: 14px;
    &.border {
      color: #5f5f5f;
    }
  }
}
</style>
