<template>
  <SectionLayout>
    <div class="main">
      <div class="info">
        <div class="title-wrapper">
          <i18n path="hero.title" class="title" tag="h1">
            <span class="dot">.</span>
          </i18n>
        </div>
        <p class="description">{{ $t('hero.description') }}</p>
        <div class="buttons">
          <Button color="plain" :font-size="16">Build with Witnet</Button>
          <Button class="card-button" color="plain" :font-size="16">
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
      <img
        src="@/assets/svg/dragon_reading.svg"
        :alt="$t('hero.dragon_reading_alt')"
        class="hero-image"
      />
    </div>
  </SectionLayout>
</template>

<style lang="scss" scoped>
.section {
  color: $white;
  padding: 0 180px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-content: center;
  grid-column: span 2;
  column-gap: 48px;

  .main {
    display: flex;
    align-items: center;

    .info {
      min-width: 400px;
      .title-wrapper {
        display: block;
        width: 100%;

        .title {
          font-size: 52px;
          font-weight: bold;
          color: #12243a;
          background: white;

          .dot {
            color: $green-1;
          }
        }
      }

      .description {
        font-size: 21px;
        margin-bottom: 48px;
        // max-width: 364px;
        color: #9797b0;
      }

      .buttons {
        .card-button {
          margin-top: 16px;
        }
      }
    }

    .hero-image {
      max-width: 77%;
      position: relative;
      right: 40px;
    }
  }

  .right {
    border: 2px solid $white;
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right::after {
    content: '';
    display: block;
    position: absolute;
    top: -25px;
    left: -25px;
    right: 15px;
    bottom: 15px;
    border: 2px solid $green-1;
    border-radius: 6px;
  }
}

@media (max-width: 1200px) {
  .section {
    color: $white;
    padding: 0 180px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-content: center;
    grid-column: span 2;
    column-gap: 48px;

    .main {
      display: flex;
      align-items: center;
      flex-direction: column;

      .info {
        min-width: 400px;
        .title-wrapper {
          display: block;
          width: 100%;

          .title {
            font-size: 52px;
            font-weight: bold;
            color: #12243a;
            background: white;

            .dot {
              color: $green-1;
            }
          }
        }

        .description {
          font-size: 21px;
          margin-bottom: 48px;
          // max-width: 364px;
          color: #9797b0;
        }

        .buttons {
          .card-button {
            margin-top: 16px;
          }
        }
      }

      .hero-image {
        max-width: none;
        width: 70vw;
        position: initial;
      }
    }

    .right {
      border: 2px solid $white;
      position: relative;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right::after {
      content: '';
      display: block;
      position: absolute;
      top: -25px;
      left: -25px;
      right: 15px;
      bottom: 15px;
      border: 2px solid $green-1;
      border-radius: 6px;
    }
  }
}

@media (max-width: 600px) {
  .section {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    .main {
      display: flex;
      align-items: center;

      .info {
        min-width: 0;
        .title-wrapper {
          display: block;
          width: 100%;

          .title {
            font-size: 52px;
            font-weight: bold;
            color: #12243a;
            background: white;

            .dot {
              color: $green-1;
            }
          }
        }

        .description {
          font-size: 21px;
          margin-bottom: 48px;
          // max-width: 364px;
          color: #9797b0;
        }

        .buttons {
          display: flex;
          flex-direction: column;

          .button {
            width: 100%;
          }
          .card-button {
            margin-top: 16px;
          }
        }
      }

      .hero-image {
        margin-top: 16px;
        max-width: none;
        width: 70vw;
        position: initial;
      }
    }

    .right {
      border: 2px solid $white;
      position: relative;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right::after {
      content: '';
      display: block;
      position: absolute;
      top: -25px;
      left: -25px;
      right: 15px;
      bottom: 15px;
      border: 2px solid $green-1;
      border-radius: 6px;
    }
  }
}
</style>
