<template>
  <a class="link" target="_blank" :href="url">
    <div class="card">
      <img class="card-img" :src="img" alt="wit" />
      <h4 v-if="title" class="card-title">{{ title }}</h4>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    img: String,
    title: String,
    url: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.link {
  text-decoration: none;
  .card {
    border: 1px solid $purple;
    background-color: rgb(244, 244, 244);
    margin: 64px 48px 48px 48px;
    width: 300px;
    height: 300px;
    text-align: center;
    &:hover {
      box-shadow: 1px 3px 11px 0px rgba(168, 152, 255, 0.65);
    }
    .card-img {
      width: 150px;
      margin: 30px;
    }
    .card-title {
      color: rgb(61, 61, 61);
      padding-bottom: 20px;
    }
    margin-bottom: 56px;
  }
}
</style>
