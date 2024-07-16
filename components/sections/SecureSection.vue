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
      >
        <br />
        <span class="font-bold">{{ $t('secure-section.title2') }}</span>
      </i18n-t>

      <p class="text text-center max-w-screen-md">{{ t('secure-section.description') }}</p>
      <div class="grid grid-cols-2 sm:grid-cols-1 mt-lg">
        <OutOfBoundariesCard
          title="Sheikah"
          description="Choose Sheikah for a privacy-focused experience on Windows, macOS, and GNU/Linux, ideal for users who prioritize security and user-friendly interfaces."
          action="Download Sheikah"
        >
          <template v-slot:icon>
            <SheikahIcon class="icon"></SheikahIcon>
          </template>
        </OutOfBoundariesCard>

        <OutOfBoundariesCard
          title="myWitWallet"
          description="Opt for myWitWallet for instant transactions without the wait for synchronization, perfect for quick and easy sending and receiving of WIT."
          action="Download myWitWallet"
        >
          <template v-slot:icon>
            <MywitwalletIcon class="icon"></MywitwalletIcon>
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
type Explorer = {
  title: string
  description: string
  url: string
}
const explorers: Array<Explorer> = [
  {
    title: t('explore.explorer-1.title'),
    description: t('explore.explorer-1.description'),
    url: URLS.data_feeds_explorer,
  },
  {
    title: t('explore.explorer-2.title'),
    description: t('explore.explorer-2.description'),
    url: URLS.block_explorer,
  },
]
</script>
