<template>
  <div
    :class="[
      { right: align === 'right' },
      { left: align === 'left' },
      'testimonial-card',
    ]"
  >
    <p class="text">{{ text }}</p>
    <p class="author">{{ author }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
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
    font-size: 18px;
    font-style: italic;
    color: $blue-1;
  }
  .author {
    margin-top: 16px;
    color: $grey-2;
    font-size: 12px;
  }
}
</style>
