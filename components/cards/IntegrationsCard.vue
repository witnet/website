<template>
  <a :href="link" :title="title" :style="customizable" target="_blank">
    <img
      class="logo"
      :src="src"
      :alt="title"
      :style="customizable"
      aria-hidden="true"
    />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    brightness: {
      type: Number,
      default: 1,
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    customizable() {
      return {
        '--brightness': this.brightness,
        '--scale': this.scale,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
  padding: 20px 0;
  height: 100px;
  width: 220px;
  opacity: 0.7;
  transition: all 0.2s ease;
  .logo {
    height: 100%;
    max-width: 100%;
    transform: scale(var(--scale));
    filter: brightness(var(--brightness)) grayscale(100%);
    transition: all 0.2s ease;
  }
  &:hover {
    opacity: 1;
    .logo {
      filter: brightness(1) grayscale(0%);
    }
  }
}
</style>
