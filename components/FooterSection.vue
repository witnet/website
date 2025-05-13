<template>
  <WFooter
    :footer-sections="footerLinks"
    :ado-description="t('footer.ado_text')"
  >
    <template #custom-contributors>
      <ClientOnly>
        <i18n-t
          keypath="footer.copyright.base1"
          class="copyright max-w-100 footer-text"
          tag="span"
          scope="global"
        >
          <a
            class="underline py-1 footer-text"
            :href="URLS.witnet_foundation"
            target="_blank"
            >{{ $t('footer.copyright.witnet_foundation') }}</a
          >
        </i18n-t>
      </ClientOnly>
    </template>
    <template #custom-license>
      <ClientOnly>
        <i18n-t
          keypath="footer.copyright.base2"
          class="copyright max-w-100 footer-text"
          tag="p"
          scope="global"
        >
          <a
            class="underline py-1 footer-text"
            href="https://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank"
            >{{ $t('footer.copyright.license') }}</a
          >
        </i18n-t>
      </ClientOnly>
    </template>
  </WFooter>
</template>

<script setup lang="ts">
import { WFooter, type FooterLink, type FooterSection } from 'wit-vue-ui'
import snakeCase from 'lodash.snakecase'
import { URLS } from '../constants'
const { t } = useI18n()
const footerSections = {
  developers: ['reference', 'randomness', 'supported_chains', 'solidity_sdk'],
  ecosystem: [
    'block_explorer',
    'data_feeds_explorer',
    'sheikah',
    'my_wit_wallet',
  ],
  learn: ['whitepaper', 'medium', 'tutorials'],
  // community: ['telegram', 'discord', 'x', 'reddit', 'youtube'],
}

function getFooterLinks(sections: Record<string, string[]>): FooterSection[] {
  return Object.entries(sections).map(([sectionName, sectionItems]) => ({
    title: sectionName.charAt(0).toLocaleUpperCase() + sectionName.slice(1),
    links: sectionItems.map((sectionItem: string) => ({
      url: URLS[sectionItem],
      label: t(getI18nStringFromSectionItem(sectionName, sectionItem)),
    })) as FooterLink[],
  })) as FooterSection[]
}

function getI18nStringFromSectionItem(
  sectionName: string,
  sectionItem: string,
) {
  return `footer.links.${sectionName}.${snakeCase(sectionItem)}`
}

const footerLinks = getFooterLinks(footerSections)
</script>
