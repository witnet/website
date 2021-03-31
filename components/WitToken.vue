<template>
  <SectionLayout class="wit-tokens-section">
    <div v-scrollanimation>
      <BaseCard :padding="48" class="card-container">
        <img
          class="wit-image"
          src="@/assets/images/wit.png"
          alt=""
          aria-hidden="true"
        />
        <h2 class="title">{{ $t('wit_token.title') }}</h2>
        <p class="text">{{ $t('wit_token.text') }}</p>
        <div class="btn-container">
          <a :href="urls.tokenomics" target="_blank">
            <Button class="btn" type="primary" :font-size="14">{{
              $t('wit_token.buttons.tokenomics')
            }}</Button>
          </a>
          <a :href="urls.sheikah" target="_blank">
            <Button class="btn" type="default" :font-size="14">
              {{ $t('wit_token.buttons.sheikah') }}
            </Button>
          </a>
          <a :href="urls.mining" target="_blank">
            <Button class="btn" type="default" :font-size="14">{{
              $t('wit_token.buttons.mining')
            }}</Button>
          </a>
        </div>
      </BaseCard>
    </div>
  </SectionLayout>
</template>

<script>
import { urls } from '../constants'
export default {
  data() {
    return {
      urls,
    }
  },
}
</script>

<style lang="scss" scoped>
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
.wit-tokens-section {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.card-container {
  margin: 48px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  row-gap: 26px;
  align-items: center;
  background-color: $white;
  position: relative;
}
.card-container::before {
  content: '';
  position: absolute;
  transform: skewY(-7deg);
  z-index: -1;
  background-color: $green-1;
  top: 25px;
  left: -34px;
  right: -34px;
  bottom: 18px;
  border-radius: 4px;
}

.card-container::after {
  content: '';
  position: absolute;
  transform: skewY(-4deg);
  z-index: -1;
  background-color: $purple-1;
  top: 14px;
  left: -24px;
  right: -24px;
  bottom: 8px;
  border-radius: 4px;
}

.wit-image {
  width: 200px;
  grid-row: span 3;
  justify-self: center;
  margin-right: 32px;
}
.text {
  max-width: 400px;
}
.btn-container {
  display: flex;
  flex-wrap: wrap;
  .btn {
    margin-top: 16px;
  }
}
@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: auto;
    justify-items: center;
    .wit-image {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
  .btn-container {
    .btn {
      width: 100%;
    }
  }
}

@media (max-width: 600px) {
  .card-container {
    grid-template-columns: 200px;
    justify-items: center;
    .wit-image {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
  .btn-container {
    margin-top: 16px;
  }
}
</style>
