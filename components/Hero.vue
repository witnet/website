<template>
  <div class="section">
    <NavBar />
    <div class="main">
      <div class="left">
        <div class="title-wrapper">
          <h1 class="title">
            Unleash de power of smart contracts<span class="dot">.</span>
          </h1>
        </div>
        <p class="description">{{ $t('description') }}</p>
        <div class="buttons">
          <Button color="white" :font-size="16">>Build with Witnet</Button>
          <Button class="card-button" color="white" :font-size="16">
            > Start mining <span class="wit">wit</span>
          </Button>
        </div>
      </div>

      <div class="right">
        <p>(nice illustration here)</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss" scoped>
.section {
  color: $white;
  background: $blue-5;
  padding: 0 180px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-content: center;
    grid-column: span 2;
    column-gap: 48px;

    .left {
      .title-wrapper {
        display: block;
        width: 100%;

        .title {
          font-size: 54px;
          font-weight: bold;
          display: inline;
          color: $blue-5;
          word-wrap: break-word;
          background: $white;

          .dot {
            color: $green-1;
          }
        }

        margin-bottom: 48px;
      }

      .description {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 48px;
      }

      .buttons {
        .card-button {
          margin-top: 16px;
        }
      }
    }

    .right {
      border: 2px solid $white;
      position: relative;
      z-index: 10;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right::after {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      top: -25px;
      left: -25px;
      right: 15px;
      bottom: 15px;
      border: 2px solid $green-1;
      border-radius: 6px;
    }
  }
}
@media (max-width: 1200px) {
  .section {
    padding: 0 0;
    .main {
      padding: 40px 40px;
      .right {
        display: none;
      }
      .right::after {
        display: none;
      }
      .left {
        .description {
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
