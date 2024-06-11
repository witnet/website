<template>
  <div class="footer-background">
    <div class="footer">
      <div class="top">
        <div v-for="section in footerLinks" :key="section.title" class="links">
          <p class="title">{{ $t(`footer.links.${section.title}.title`) }}</p>
          <a
            v-for="link in section.links"
            :key="link.text"
            class="link"
            :href="link.url"
            target="_blank"
          >
            {{ $t(link.text) }}
          </a>
        </div>
        <div class="alliance-text">

          <AdoIcon class="logo white"/>
          <i18n path="footer.ado_text" tag="p" class="small-description">
            <a class="link underline" :href="urls.ado" target="_blank">
              theado.org
            </a>
          </i18n>
        </div>
      </div>
      <div class="bottom">
        <SvgIcon class="logo white" name="witnet_dark" />
        <i18n path="footer.copyright.base" class="copyright" tag="p">
          <span>2018-{{ new Date().getFullYear() }}</span>
          <a class="link" href="https://witnet.foundation" target="_blank">{{
            $t('footer.copyright.witnet_foundation')
          }}</a>
          <a
            class="link"
            href="https://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank"
            >{{ $t('footer.copyright.license') }}</a
          >
        </i18n>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdoIcon from '@/assets/svg/ado.svg?component'

const footerSections = {
  witnet: ['oracle', 'ecosystem', 'community', 'whitepaper', 'mediaKit'],
  ecosystem: ['fullNode', 'wallet', 'dataFeedsExplorer'],
  developers: ['documentation', 'priceFeeds', 'randomness', 'getPostRequest'],
  community: ['telegram', 'discord', 'twitter', 'reddit', 'youtube'],
}

const urls = {
  ado: 'https://github.com/adoracles/',
  advocateProgram:
    'https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61',
  angelList: 'https://angel.co/company/witnet-foundation-1',
  blockExplorer: 'https://witnet.network/',
  coin: '#coin',
  community: 'https://witnet.io/#community',
  dataFeedsExplorer: 'https://feeds.witnet.io',
  discord: 'https://discord.gg/witnet',
  documentation: 'https://docs.witnet.io/',
  ecosystem: 'https://witnet.io/#ecosystem',
  fullNode: 'https://docs.witnet.io/try/run-a-node/',
  mediaKit:
    'https://drive.google.com/drive/u/1/folders/1z9dSts64xyaIZqRvniMPDib7UWOE2P3z',
  gate: 'https://www.gate.io/trade/WIT_USDT',
  getPostRequest:
    'https://docs.witnet.io/smart-contracts/apis-and-http-get-post-oracle',
  github: 'https://github.com/witnet',
  grantProgram:
    'https://witnet.notion.site/The-Witnet-Grant-Program-0e6bc5ddbe4a4bf8a22c262dedfe268f',
  integrateDirectly:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/using-witnet-data-feeds#reading-last-price-and-timestamp-from-a-price-feed-contract-serving-a-specific-pair',
  integrateThroughProxy:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/using-witnet-data-feeds#reading-multiple-currency-pairs-from-the-router',
  medium: 'https://medium.com/witnet',
  mexc: 'https://www.mexc.com/exchange/WIT_USDT',
  mining: 'https://docs.witnet.io/node-operators/docker-quick-start-guide',
  oracle: '#oracle',
  priceFeeds: 'https://docs.witnet.io/smart-contracts/witnet-data-feeds',
  randomness: 'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle',
  reddit: 'https://reddit.com/r/witnet',
  requestDataFeed: 'https://tally.so/r/wMZDAn',
  telegram: 'https://t.me/witnetio',
  token: 'https://witnet.io/#coin',
  tokenomics:
    'https://medium.com/witnet/wit-witnet-blockchains-native-tokenomics-4559084073c5',
  truffleBox:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-get-request',
  twitter: 'https://twitter.com/witnet_io',
  wallet: 'https://sheikah.app/',
  whitepaper: 'https://witnet.io/witnet-whitepaper.pdf',
  youtube: 'https://www.youtube.com/channel/UCCS143kLVAH7oHZKvNNNxKQ',
  myWitWallet: 'https://mywitwallet.com/',
}

import snakeCase from 'lodash.snakecase'

function getFooterLinks(sections) {
  return Object.entries(sections).map(([sectionName, sectionItems]) => ({
    title: sectionName,
    links: sectionItems.map((sectionItem) => ({
      url: urls[sectionItem],
      text: getI18nStringFromSectionItem(sectionName, sectionItem),
    })),
  }))
}

function getI18nStringFromSectionItem(sectionName, sectionItem) {
  return `footer.links.${sectionName}.${snakeCase(sectionItem)}`
}

const footerLinks = getFooterLinks(footerSections)
</script>

<style scoped lang="scss">
.footer-background {
  background: var(--footer-bg);
  // TODO
  background: #1D1D1B;
  color: var(--white-text);
  color: white;
  min-height: 20vh;
  padding-top: var(--footer-padding-top);
  display: flex;
  justify-content: center;
}
.bottom {
  padding-top: 40px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  row-gap: 16px;
  align-items: center;
  column-gap: 16px;
  .logo {
    width: 40px;
  }
  .white-paper {
    width: min-content;
  }
  .copyright {
    font-size: var(--footer-text-size-small);
    line-height: 1.5;
    max-width: 350px;
    a {
      font-size: inherit;
      text-decoration: underline;
    }
  }
}
.link {
  font-size: var(--footer-text-size-medium);
  color: var(--white-text);
  padding: 4px 0 4px 0;
  &.underline {
    text-decoration: underline;
  }
}
.footer {
  width: 100vw;
  max-width: var(--desktop-margin);
  padding: 48px 32px;
  .top {
    border-bottom: 1px solid var(--white-text);
    display: grid;
    padding-bottom: 40px;
    column-gap: 40px;
    row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: space-between;
    .links {
      display: flex;
      flex-direction: column;
      .title {
        font-family: Almarai, sans-serif;
        font-size: var(--footer-text-size);
        font-weight: bold;
        padding: 8px 0 8px 0;
      }
    }
    .alliance-text {
      grid-column: span 2;
      font-size: var(--footer-text-size-medium);
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
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content;
    .copyright {
      grid-row: 2;
      grid-column: 2;
    }
    .logo {
      grid-row: 2;
      grid-column: 1;
    }
  }
}
</style>