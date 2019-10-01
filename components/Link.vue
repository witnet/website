<template>
  <div class="link-container">
    <img class="link-img" src="~/assets/wit-dot.svg" alt="wit" />
    <nuxt-link :to="'about/' + link" class="link">
      <h3 v-if="title" class="link-title">{{ title }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: String,
    link: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.link-container {
  margin: 48px;
  width: 400px;
  display: flex;
  text-align: left;
  align-items: center;
  .link-img {
    width: 25px;
    margin: 0 30px;
  }
  .link {
    text-decoration: none;
    .link-title {
      color: $grey-2;
      display: inline;
      background-color: rgba(255, 255, 143, 0.794);
      line-height: 1.5;
    }
  }
  margin-bottom: 56px;
}

@media screen and (max-width: 1200px) {
  .link-container {
    margin: 48px 0;
    .link-img {
      width: 25px;
      margin: 0 30px;
    }
  }
}
</style>
