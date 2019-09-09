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
.link {
  text-decoration: none;
  .card {
    background-color: rgb(244, 244, 244);
    margin: 64px 48px 48px 48px;
    width: 300px;
    height: 300px;
    border-radius: 10%;
    text-align: center;
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
