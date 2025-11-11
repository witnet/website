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
        class="grid grid-cols-2 gap-xl mt-xl sm:grid-cols-1 md:grid-cols-2 justify-items-left"
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
    name: t('buy-section.exchanges.uniswap'),
    logo: IconName.Uniswap,
    link: URLS.uniswap,
  },
  {
    name: t('buy-section.exchanges.pancakeswap'),
    logo: IconName.Pancakeswap,
    link: URLS.pancakeswap,
  },
  {
    name: t('buy-section.exchanges.dextools'),
    logo: IconName.Dextools,
    link: URLS.dextools,
  },
  {
    name: t('buy-section.exchanges.oneinch'),
    logo: IconName.Oneinch,
    link: URLS.oneinch,
  },
]

console.log('exchanges', exchanges)
</script>
