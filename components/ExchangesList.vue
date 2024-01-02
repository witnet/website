<template>
  <div>
    <ExchangeLink
      v-for="exchange in exchanges"
      :key="exchange.name"
      :name="exchange.name"
      :url="exchange.url"
      :icon="exchange.icon"
    />
  </div>
</template>
<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import { URLS } from '@/constants'
import bitmart from '@/assets/svg/flag-eeuu.svg?component'

type Exchange = {
  name: string
  url: string
  icon: FunctionalComponent
}
const exchanges: Ref<Array<Exchange>> = shallowRef([
  {
    name: 'Gate.io',
    url: URLS.bitmart,
    icon: bitmart,
  },
  {
    name: 'MEXC',
    url: URLS.mexc,
    icon: bitmart,
  },
  {
    name: 'Bitmart',
    url: URLS.bitmart,
    icon: bitmart,
  },
  {
    name: 'Changelly',
    url: URLS.changelly,
    icon: bitmart,
  },
  {
    name: 'SimpleSwap',
    url: URLS.simpleSwap,
    icon: bitmart,
  },
])
</script>
