<template>
  <CenteredSection background="black">
    <div class="text-white-50 flex justify-center">
      <div class="footer p-4">
        <div
          class="top flex flex-col md:flex-row justify-between border-b border-white-50 pb-10 gap-x-10 gap-y-7"
        >
          <div
            class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(3,150px)]"
          >
            <div
              v-for="section in footerLinks"
              :key="section.title"
              class="py-2 flex flex-col"
            >
              <p class="title font-bold text-sm">
                {{ $t(`footer.links.${section.title}.title`) }}
              </p>
              <a
                v-for="link in section.links"
                :key="link.text"
                class="py-1 text-sm"
                :href="link.url"
                target="_blank"
              >
                {{ $t(link.text) }}
              </a>
            </div>
          </div>
          <div class="text-sm col-span-3">
            <AdoIcon class="mb-2 w-14" />
            <i18n-t keypath="footer.ado_text" tag="p" class="text-sm">
              <a
                class="py-1 underline text-sm"
                :href="URLS.ado"
                target="_blank"
              >
                theado.org
              </a>
            </i18n-t>
          </div>
        </div>
        <div class="flex items-center gap-4 pt-10">
          <Wit2Icon class="w-2xl white" name="witnet_dark" />
          <div>
            <i18n-t
              keypath="footer.copyright.base1"
              class="copyright max-w-100 text-sm"
              tag="p"
            >
              <span>2018-{{ new Date().getFullYear() }}</span>
              <a
                class="underline py-1 text-sm"
                :href="URLS.witnet_foundation"
                target="_blank"
                >{{ $t('footer.copyright.witnet_foundation') }}</a
              >
              <a
                class="underline py-1 text-sm"
                href="https://creativecommons.org/publicdomain/zero/1.0/"
                target="_blank"
                >{{ $t('footer.copyright.license') }}</a
              >
            </i18n-t>
            <i18n-t
              keypath="footer.copyright.base2"
              class="copyright max-w-100 text-sm"
              tag="p"
            >
              <a
                class="underline py-1 text-sm"
                href="https://creativecommons.org/publicdomain/zero/1.0/"
                target="_blank"
                >{{ $t('footer.copyright.license') }}</a
              >
            </i18n-t>
          </div>
        </div>
      </div>
    </div>
  </CenteredSection>
</template>

<script setup>
import AdoIcon from '@/assets/svg/ado.svg?component'
import Wit2Icon from '@/assets/svg/wit2.svg?component'

const footerSections = {
  developers: ['reference', 'libraries', 'tools'],
  ecosystem: [
    'block_explorer',
    'data_feeds_explorer',
    'sheikah',
    'my_wit_wallet',
  ],
  learn: ['whitepaper', 'medium', 'tutorials'],
  // community: ['telegram', 'discord', 'x', 'reddit', 'youtube'],
}

import snakeCase from 'lodash.snakecase'
import { URLS } from '../constants'

function getFooterLinks(sections) {
  return Object.entries(sections).map(([sectionName, sectionItems]) => ({
    title: sectionName,
    links: sectionItems.map((sectionItem) => ({
      url: URLS[sectionItem],
      text: getI18nStringFromSectionItem(sectionName, sectionItem),
    })),
  }))
}

function getI18nStringFromSectionItem(sectionName, sectionItem) {
  return `footer.links.${sectionName}.${snakeCase(sectionItem)}`
}

const footerLinks = getFooterLinks(footerSections)
</script>
