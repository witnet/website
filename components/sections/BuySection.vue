<template>
  <NuxtLayout
    id="buy"
    name="section"
    :content-classes="'grid justify-items-center h-max gap-md h-lg-y-screen sm:h-[max-content]'"
  >
    <template #content>
      <i18n-t
        keypath="buy-section.title"
        class="title-h2"
        tag="h2"
        scope="global"
      >
        <span class="text-wit-blue-500">.</span>
      </i18n-t>
      <p class="text text-center section-description-max-w">
        {{ t('buy-section.description') }}
      </p>
      <div
        class="grid grid-cols-3 gap-xl mt-xl sm:grid-cols-1 md:grid-cols-2 justify-items-left"
      >
        <WIconText
          v-for="exchange in exchanges"
          :key="exchange.name"
          :text="exchange.name"
          :link="exchange.link"
          :position="IconTextPosition.Right"
          :bold="true"
          :rounded="true"
        >
          <WIcon :name="exchange.logo" class="h-auto w-md" />
        </WIconText>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { WIconText, WIcon, IconName, IconTextPosition } from 'wit-vue-ui'
import { URLS } from '@/constants.js'
import type { Exchange } from '@/types.js'

const { t } = useI18n()
const exchanges: Array<Exchange> = [
  {
    name: t('buy-section.exchanges.gate'),
    logo: IconName.Gate,
    link: URLS.gate,
  },
  {
    name: t('buy-section.exchanges.mexc'),
    logo: IconName.Mexc,
    link: URLS.mexc,
  },
  {
    name: t('buy-section.exchanges.bitmart'),
    logo: IconName.Bitmart,
    link: URLS.bitmart,
  },
  {
    name: t('buy-section.exchanges.changelly'),
    logo: IconName.Changelly,
    link: URLS.changelly,
  },
  {
    name: t('buy-section.exchanges.simpleswap'),
    logo: IconName.Simpleswap,
    link: URLS.simpleSwap,
  },
  {
    name: t('buy-section.exchanges.letsexchange'),
    logo: IconName.Letsexchange,
    link: URLS.letsexchange,
  },
]
</script>
