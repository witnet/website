<template>
  <div class="section">
    <NavBar />
    <div class="main">
      <div class="left">
        <div class="title-wrapper">
          <i18n path="hero.title.base" class="title" tag="h1">
            <span class="dot">.</span>
          </i18n>
        </div>
        <p class="description">{{ $t('description') }}</p>
        <div class="buttons">
          <Button color="white" :font-size="16">>Build with Witnet</Button>
          <Button class="card-button" color="white" :font-size="16">
            <i18n
              path="hero.buttons.start_mining.base"
              class="title"
              tag="null"
            >
              <span class="wit">{{ $t('hero.buttons.start_mining.wit') }}</span>
            </i18n>
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
  color: white;
  background: #12243a;
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
          color: #12243a;
          word-wrap: break-word;
          background: white;

          .dot {
            color: #5fbfae;
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
      border: 2px solid white;
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
      border: 2px solid #5fbfae;
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
