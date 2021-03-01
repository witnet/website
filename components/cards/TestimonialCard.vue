<template>
  <div
    :class="[
      { right: align === 'right' },
      { left: align === 'left' },
      'testimonial-card',
    ]"
  >
    <p class="title text">{{ text }}</p>
    <p class="subtitle author">{{ author }}</p>
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
    font-style: italic;
    color: $blue-1;
  }
  .author {
    margin-top: 16px;
    color: $grey-2;
  }
}
</style>
