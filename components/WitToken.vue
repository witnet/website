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
        <h1 class="title header-2">{{ $t('wit_token.title') }}</h1>
        <p class="text subtitle">{{ $t('wit_token.text') }}</p>
        <div class="btn-container">
          <a :href="urls.mining" target="_blank">
            <Button class="btn" type="primary">{{
              $t('wit_token.buttons.mining')
            }}</Button>
          </a>
          <a :href="urls.tokenomics" target="_blank">
            <Button class="btn" type="default">{{
              $t('wit_token.buttons.tokenomics')
            }}</Button>
          </a>
          <a :href="urls.sheikah" target="_blank">
            <Button class="btn" type="default">
              {{ $t('wit_token.buttons.sheikah') }}
            </Button>
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
  font-weight: lighter;
}
.btn-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .btn {
    margin-top: 16px;
    margin-right: 8px;
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
  .text {
    text-align: center;
  }
  .btn-container {
    .btn {
      width: max-content;
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
  .text {
    text-align: center;
  }
  .btn-container {
    .btn {
      width: 100%;
    }
  }
}
</style>
