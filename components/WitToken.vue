<template>
  <div class="diagonal-box">
    <div class="content">
      <h2 class="title">{{ $t('wit_token.title') }}</h2>
      <BaseCard :padding="48">
        <p class="text">{{ $t('wit_token.text') }}</p>
        <div class="btn-container">
          <Button class="card-button" :font-size="12">{{
            $t('wit_token.buttons.tokenomics')
          }}</Button>
          <Button class="card-button" :font-size="12">
            {{ $t('wit_token.buttons.sheikah') }}
          </Button>
          <Button class="card-button" :font-size="12">{{
            $t('wit_token.buttons.mining')
          }}</Button>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/cards/BaseCard.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    BaseCard,
    Button,
  },
}
</script>

<style lang="scss" scoped>
.diagonal-box {
  background-color: #5fbfae;
  transform: skewY(2deg);
  padding: 104px 48px;
}
.content {
  max-width: 600px;
  margin: 0 auto;
  transform: skewY(-2deg);
  .title {
    color: $white;
    margin-bottom: 32px;
  }
  .text {
    max-width: 400px;
  }
  .btn-container {
    display: flex;
    flex-wrap: wrap;
    .card-button {
      margin-top: 16px;
    }
  }
}
</style>
