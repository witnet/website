<template>
  <div class="image">
    <img class="image-img" :src="img" alt="wit" />
    <h4 v-if="title" class="image-title">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'DescriptiveImage',
  props: {
    img: String,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';
.image {
  .image-img {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }
  .image-title {
    color: $purple;
  }
  margin-bottom: 56px;
}
</style>
