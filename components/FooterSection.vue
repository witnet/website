<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-black-950'"
    :content-classes="'grid justify-items-center'"
    :section-animation="false"
  >
    <template #content>
      <div class="footer grid gap-xl">
        <div class="grid grid-cols-[max-content_1fr] md:grid-cols-1 gap-3xl">
          <div
            class="grid grid-cols-[max-content_max-content_max-content] gap-3xl sm:gap-xl sm:grid-cols-2 justify-items-start"
          >
            <div
              v-for="section in footerLinks"
              :key="section.title"
              class="py-2 flex flex-col gap-sm"
            >
              <p class="title font-bold footer-text mb-sm">
                {{ $t(`footer.links.${section.title}.title`) }}
              </p>
              <ul class="py-2 flex flex-col gap-sm">
                <li
                  v-for="link in section.links"
                  :key="link.text"
                  class="link-list-item"
                >
                  <a
                    class="link footer-text"
                    :href="link.url"
                    :data-text="$t(link.text)"
                    target="_blank"
                  >
                    {{ $t(link.text) }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full grid gap-md xs:mt-lg">
            <AdoIcon class="mb-2 w-[50px] h-auto" />
            <i18n-t
              keypath="footer.ado_text"
              tag="p"
              class="footer-text"
              scope="global"
            >
              <a
                class="py-1 underline footer-text"
                :href="URLS.ado"
                target="_blank"
              >
                theado.org
              </a>
            </i18n-t>
          </div>
        </div>
        <div
          class="grid grid-cols-[max-content_max-content_1fr] sm:grid-cols-1 align-middle gap-lg pt-xl items-center"
        >
          <WitOracleIcon class="w-[140px] h-auto white" name="witnet_dark" />
          <div class="h-max self-center">
            <i18n-t
              keypath="footer.copyright.base1"
              class="copyright max-w-100 footer-text"
              tag="p"
              scope="global"
            >
              <span>2018-{{ new Date().getFullYear() }}</span>
              <a
                class="underline py-1 footer-text"
                :href="URLS.witnet_foundation"
                target="_blank"
                >{{ $t('footer.copyright.witnet_foundation') }}</a
              >
              <a
                class="underline py-1 footer-text"
                href="https://creativecommons.org/publicdomain/zero/1.0/"
                target="_blank"
                >{{ $t('footer.copyright.license') }}</a
              >
            </i18n-t>
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
          </div>
          <!-- <client-only>
            <LanguageSwitcher class="justify-self-end self-center" />
          </client-only> -->
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import snakeCase from 'lodash.snakecase'
import { URLS } from '../constants'
import AdoIcon from '@/assets/svg/ado.svg?component'
import WitOracleIcon from '@/assets/svg/witnet-logo-dark.svg?component'

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
