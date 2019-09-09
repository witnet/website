<template>
  <div class="link-container">
    <img class="link-img" src="~/assets/wit-dot.svg" alt="wit" />
    <a class="link" href="#section">
      <h3 v-if="title" class="link-title">{{ title }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.link-container {
  margin: 48px;
  width: 300px;
  .link-img {
    width: 25px;
    margin: 0 10px;
  }
  .link {
    text-decoration: none;
    .link-title {
      background-color: $white;
      color: $purple;
      display: inline;
    }
  }
  margin-bottom: 56px;
}
</style>
