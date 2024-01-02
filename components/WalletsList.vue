<template>
  <div>
    <WalletCard
      v-for="wallet in wallets"
      :key="wallet.name"
      :title="wallet.title"
      :description="wallet.description"
      :icon="wallet.icon"
      :url="wallet.url"
    />
  </div>
</template>
<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import bitmart from '@/assets/svg/flag-eeuu.svg?component'
import { URLS } from '@/constants'

const { t } = useI18n()

type WalletLink = {
  name: string
  title: string
  url: string
  description: string
  icon: FunctionalComponent
}
const wallets: Ref<Array<WalletLink>> = shallowRef([
  {
    name: 'Sheikah',
    title: t('sheikah.title'),
    description: t('sheikah.description'),
    url: URLS.bitmart,
    icon: bitmart,
  },
  {
    name: 'myWitWallet',
    title: t('my-wit-wallet.title'),
    description: t('my-wit-wallet.description'),
    url: URLS.mexc,
    icon: bitmart,
  },
])
</script>
