<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-wit-blue-500'"
    :content-classes="'grid justify-items-center gap-md h-max'"
    :height="'h-lg-y-screen sm:h-[max-content]'"
  >
    <template #content>
      <i18n-t
        keypath="secure-section.title1"
        class="title-h2 font-normal text-center"
        tag="h2"
        scope="global"
      >
        <br />
        <span class="font-bold">{{ $t('secure-section.title2') }}</span>
        <span class="text-white-50 font-bold">.</span>
      </i18n-t>

      <p class="text text-center section-description-max-w">
        {{ t('secure-section.description') }}
      </p>
      <div class="grid grid-cols-2 md:grid-cols-1 mt-lg">
        <OutOfBoundariesCard
          v-for="wallet in wallets"
          :key="wallet.title"
          :title="wallet.title"
          :description="wallet.description"
          :action="wallet.action"
          :url="wallet.url"
        >
          <template #icon>
            <component :is="wallet.icon" class="icon" />
          </template>
        </OutOfBoundariesCard>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import SheikahIcon from '@/assets/svg/sheikah.svg?component'
import MywitwalletIcon from '@/assets/svg/mywitwallet.svg?component'
import { URLS } from '@/constants'

const { t } = useI18n()
type WalletInfo = {
  title: string
  description: string
  url: string
  action: string
  icon: any
}
const wallets: Array<WalletInfo> = [
  {
    title: t('sheikah.title'),
    description: t('sheikah.description'),
    url: URLS.sheikah,
    action: t('sheikah.action'),
    icon: SheikahIcon,
  },
  {
    title: t('my-wit-wallet.title'),
    description: t('my-wit-wallet.description'),
    url: URLS.my_wit_wallet,
    action: t('my-wit-wallet.action'),
    icon: MywitwalletIcon,
  },
]
</script>
