<template>
  <div :class="[align, 'testimonial-card']">
    <p class="title text">{{ text }}</p>
    <p class="subtitle author">{{ author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    align: {
      type: String,
      default: 'left',
    },
  },
}
</script>

<style lang="scss" scoped>
.testimonial-card {
  &.right {
    text-align: right;
  }
  &.left {
    text-align: left;
  }
  .text {
    font-style: italic;
    color: $white;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  .author {
    font-size: 0.75rem;
    color: $white;
  }
}
</style>
