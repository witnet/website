<template>
  <div class="tab-frame">
    <div class="content">
      <h2 class="title">{{ this.$t('participate_title') }}</h2>
      <p>{{ this.$t('about_text') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.content {
  color: rgb(61, 61, 61);
  line-height: 25px;
  margin-left: 5vw;
  margin-top: 10vw;
  width: 50%;
  .title {
    color: $purple;
  }
}
@media screen and (max-width: 1200px) {
  .content {
    margin-top: 10vw;
  }
}
</style>
