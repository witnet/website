<template>
  <div class="tab-frame">
    <div class="content">
      <h2 class="title">{{ this.$t('participate_title') }}</h2>
      <p class="text">{{ this.$t('about_text') }}</p>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Witnet - Participate',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Witnet protocol gives smart contracts real power by connecting them to any online data source. Sport results, stock prices, weather forecasts or even other ...',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.content {
  color: rgb(61, 61, 61);
  line-height: 25px;
  margin-top: 8vw;
  margin-left: 5vw;
  width: 50%;
  .title {
    color: $purple;
  }
}
@media screen and (max-width: 1200px) {
  .content {
    margin-top: 10vw;
    width: 80%;
  }
}
</style>
