<template>
  <a class="link" href="#section">
    <div class="card">
      <img class="card-img" :src="img" alt="wit" />
      <h3 v-if="title" class="card-title">{{ title }}</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    img: String,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.link {
  text-decoration: none;
  .card {
    background-color: $purple;
    // background-color: rgb(244, 244, 244);
    box-shadow: 1px 3px 11px 0px rgba(44, 44, 44, 0.349);
    margin: 64px 48px 48px 48px;
    width: 300px;
    height: 300px;
    text-align: center;
    .card-img {
      width: 150px;
      margin: 30px;
    }
    .card-title {
      color: white;
      // color: rgb(61, 61, 61);
      padding-bottom: 20px;
    }
    margin-bottom: 56px;
  }
}
</style>
