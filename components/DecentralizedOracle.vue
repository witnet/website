<template>
  <div class="decentralized-oracle">
    <div class="wrapper">
      <div class="content">
        <div class="text">
          <h2 class="title">
            {{ $t('decentralized_oracle.title') }}
          </h2>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_1') }}
          </p>
          <p class="paragraph">
            {{ $t('decentralized_oracle.paragraph_2') }}
          </p>
        </div>
        <div class="image">
          <p class="illustration">(Nice illustration here)</p>
        </div>
      </div>
      <Button color="black" :font-size="16" class="margin-top">
        > {{ $t('button_label') }}
      </Button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.decentralized-oracle {
  padding: 56px 180px;
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 1280px;

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      align-items: center;

      .text {
        max-width: 554px;

        .title {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 32px;
        }

        .paragraph {
          font-size: 18px;
          margin-bottom: 16px;
        }
      }
      .image {
        justify-self: center;
        .illustration {
          border-radius: 50%;
          background: #fff;
          width: 300px;
          height: 300px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }

    .margin-top {
      margin-top: 16px;
    }
  }
}
@media (max-width: 1200px) {
  .decentralized-oracle {
    padding: 40px 40px;
  }
}
</style>
