<template>
  <SectionLayout class="wit-tokens-section">
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
  </SectionLayout>
</template>

<style lang="scss" scoped>
.wit-tokens-section {
  background-color: $green-1;
  transform: skewY(2deg);
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
