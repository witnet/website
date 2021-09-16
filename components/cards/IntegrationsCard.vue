<template>
  <a :href="link" target="_blank">
    <div class="card-container">
      <img class="logo" :src="src" alt="" aria-hidden="true" />
      <p class="title">{{ title }}</p>
    </div>
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
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  row-gap: 16px;
  text-align: center;
  justify-items: center;
  .logo {
    height: 80px;
    margin-bottom: 5px;
    max-width: 220px;
  }
}
</style>
