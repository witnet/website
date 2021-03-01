<template>
  <div class="diagonal-box">
    <div class="content">
      <h2 class="title">Incentivized by the wit token</h2>
      <BaseCard :padding="48">
        <p class="text">
          The Witnet decentralized oracle runs on its own blockchain and relies
          on the token for incentivization of independently run nodes that
          resolve the data requests and agree on the results.
        </p>
        <div class="btn-container">
          <Button class="card-button" :font-size="12">> Tokenomics info</Button>
          <Button class="card-button" :font-size="12">
            > Download Sheikah wallet
          </Button>
          <Button class="card-button" :font-size="12">> Start mining</Button>
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
  background-color: $green-1;
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
