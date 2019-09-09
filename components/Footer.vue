<template>
  <footer class="footer">
    <div class="column-left">
      <img src="~/assets/white-logo.svg" alt="white witnet-logo" class="logo" />
      <p class="footer-description">
        {{ this.$t('footer_description') }}
      </p>
      <p class="footer-description">
        {{ this.$t('footer_copyright') }}
      </p>
    </div>
    <div class="column-right">
      <div class="social-bar">
        <a href="https://twitter.com/witnet_io" target="_blank">
          <img class="social" src="~/assets/twitter.svg" alt="Twitter logo" />
        </a>
        <a href="https://discord.gg/X4uurfP" target="_blank">
          <img class="social" src="~/assets/discord.svg" alt="Discord logo" />
        </a>
        <a href="https://medium.com/witnet" target="_blank">
          <img class="social" src="~/assets/medium.svg" alt="Medium logo" />
        </a>
        <a
          href="mailto:info@witnet.foundation?subject=Witnet project"
          target="_blank"
        >
          <img class="social" src="~/assets/mail.svg" alt="email logo" />
        </a>
        <a href="https://t.me/witnetio" target="_blank">
          <img class="social" src="~/assets/telegram.svg" alt="Telegram logo" />
        </a>
        <a href="https://github.com/witnet" target="_blank">
          <img class="social" src="~/assets/github.svg" alt="Github logo" />
        </a>
        <a href="https://reddit.com/r/witnet" target="_blank">
          <img class="social" src="~/assets/reddit.svg" alt="Reddit logo" />
        </a>
      </div>
      <a
        href="/witnet-whitepaper.pdf"
        class="secondary-white read-btn"
        target="_blank"
      >
        {{ this.$t('read_btn') }}
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.footer {
  color: $white;
  padding: 40px;
  background-color: $purple-2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 250px;
  }
  .footer-description {
    margin: 30px 0px;
    font-size: 14px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
  }
  .social-bar {
    padding: 5px;
    border-bottom: 1px solid $white;
    .social {
      width: 30px;
      margin: 5px;
    }
  }
  .read-btn {
    margin-top: 56px;
  }
  .column-right {
    text-align: center;
  }
}
@media screen and (max-width: 1200px) {
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
