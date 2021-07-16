<template>
  <div :class="[align, 'testimonial-card']">
    <p class="title text">{{ text }}</p>
    <a
      :href="reference"
      :target="reference ? '_blank' : undefined"
      class="subtitle author"
    >
      {{ author }}
    </a>
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
    reference: {
      type: String,
      required: false,
      default: undefined,
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
    font-family: 'Avenir Next Variable W05 Itali', sans-serif;
    color: $white;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  .author {
    font-family: 'Avenir Next Variable W05835004', sans-serif;
    font-size: 0.8rem;
    color: $white;
  }
}
</style>
