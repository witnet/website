<template>
  <SectionLayout
    class="footer-section"
    :full-background="true"
    background-color="#112338"
  >
    <div class="top">
      <div class="links">
        <p class="title">{{ $t('footer.links.witnet.title') }}</p>
        <InnerLink class="link" hash="oracle">
          {{ $t('footer.links.witnet.oracle') }}
        </InnerLink>
        <InnerLink class="link" hash="token">
          {{ $t('footer.links.witnet.token') }}
        </InnerLink>
        <InnerLink class="link" hash="ecosystem">
          {{ $t('footer.links.witnet.ecosystem') }}
        </InnerLink>
        <InnerLink class="link" hash="community">
          {{ $t('footer.links.witnet.community') }}
        </InnerLink>
      </div>
      <div class="links">
        <p class="title">{{ $t('footer.links.ecosystem.title') }}</p>
        <a class="link" :href="urls.mining" target="_blank">
          {{ $t('footer.links.ecosystem.full_node') }}</a
        >
        <a class="link" :href="urls.sheikah" target="_blank">{{
          $t('footer.links.ecosystem.wallet')
        }}</a>
        <a class="link" :href="urls.blockExplorer" target="_blank">{{
          $t('footer.links.ecosystem.block_explorer')
        }}</a>
      </div>
      <div class="links">
        <p class="title">{{ $t('footer.links.community.title') }}</p>
        <a class="link" :href="urls.telegram" target="_blank">{{
          $t('footer.links.community.telegram')
        }}</a>
        <a class="link" :href="urls.discord" target="_blank">{{
          $t('footer.links.community.discord')
        }}</a>
        <a class="link" :href="urls.twitter" target="_blank">{{
          $t('footer.links.community.twitter')
        }}</a>
        <a class="link" :href="urls.reddit" target="_blank">{{
          $t('footer.links.community.reddit')
        }}</a>
      </div>
      <div class="alliance-text">
        <img
          class="logo"
          src="@/assets/images/ado_member.svg"
          alt="Witnet is an ADO member"
          aria-hidden="true"
        />
        <i18n path="footer.ado_text" tag="p" class="small-description">
          <a class="link underline" :href="urls.ado" target="_blank">
            theado.org
          </a>
        </i18n>
      </div>
    </div>
    <div class="bottom">
      <img
        class="logo"
        src="@/assets/images/witnet_dark.svg"
        alt="Wit"
        aria-hidden="true"
      />
      <i18n path="footer.copyright.base" class="copyright" tag="p">
        <a href="https://witnet.foundation" target="_blank">{{
          $t('footer.copyright.witnet_foundation')
        }}</a>
        <a
          href="https://creativecommons.org/publicdomain/zero/1.0/"
          target="_blank"
          >{{ $t('footer.copyright.license') }}</a
        >
      </i18n>
      <a target="blank" href="https://witnet.io/witnet-whitepaper.pdf">
        <Button class="white-paper" :font-size="14" type="dark"
          >Whitepaper</Button
        >
      </a>
      <LanguageSelector class="language-selector" />
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
.bottom {
  padding-top: 40px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: max-content max-content;
  row-gap: 16px;
  align-items: center;
  column-gap: 16px;
  .logo {
    grid-row: 1 / span 2;
    width: 40px;
  }
  .language-selector {
    width: min-content;
    justify-self: center;
    align-self: flex-start;
  }
  .white-paper {
    width: min-content;
  }
  .copyright {
    grid-row: 1 / span 2;
    line-height: 1.5;
    max-width: 350px;
    a {
      font-size: inherit;
      text-decoration: underline;
    }
  }
}
.footer-section {
  background-color: $dark-blue;
  color: $white;
  .top {
    border-bottom: 1px solid $alpha-white;
    display: grid;
    padding-bottom: 40px;
    column-gap: 40px;
    row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: space-between;
    .links {
      display: flex;
      flex-direction: column;
      .link {
        font-size: 0.9rem;
        color: $white;
        padding: 4px 0 4px 0;
      }
      .title {
        font-family: Almarai, sans-serif;
        font-size: 0.95rem;
        font-weight: bold;
        padding: 8px 0 8px 0;
      }
    }
    .alliance-text {
      grid-column: span 2;
      line-height: 1.5;
      .logo {
        width: 50px;
        margin-bottom: 8px;
      }
    }
  }
}
@media (max-width: 600px) {
  .bottom {
    .logo {
      align-self: flex-start;
    }
  }
}
</style>
