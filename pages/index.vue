<template>
  <div class="container">
    <div class="centered-content">
      <h1 class="title">
        <MyWitWalletLogo class="title-logo" />
        <span class="support-header"> Support </span>
      </h1>
      <p class="subtitle">{{ $t('description') }}</p>
      <div class="contact-links">
        <h3>{{ $t('contact-links-title') }}</h3>
        <SocialLinks />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  color: $white;
  align-items: center;
  text-align: center;
  .centered-content {
    display: grid;
    padding: 0 16px 16px 16px;
    grid-template-rows: max-content max-content;
    row-gap: 24px;
    justify-items: center;
    .title {
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      .title-logo {
        width: 300px;
        height: auto;
        padding-right: 8px;
      }
      .support-header {
        font-size: 40px;
        padding-bottom: 8px;
      }
    }
    .subtitle {
      margin-top: 0;
      font-size: 18px;
      color: $white-2;
      max-width: 600px;
    }
    .contact-links {
      display: grid;
      row-gap: 24px;
      justify-content: center;
      align-items: center;
    }
  }
}
@media (max-width: 600px) {
  .container {
    .centered-content {
      .title {
        display: grid;
        grid-template-columns: 1fr;
        .title-logo {
          width: 250px;
          padding-right: 8px;
        }
        .support-header {
          font-size: 24px;
          padding-bottom: 5px;
        }
      }
    }
  }
}
</style>
