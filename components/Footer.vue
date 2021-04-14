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
        <a class="link" :href="urls.minning" target="_blank">
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
          src="@/assets/images/ado_member.png"
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
      <!-- FIXME(#63): Update selector to fit here
      <LanguageSelector /> -->
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
  align-items: center;
  column-gap: 24px;
  .logo {
    width: 40px;
  }
  .copyright {
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
</style>
