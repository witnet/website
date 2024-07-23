<template>
  <NuxtLayout
    id="buy"
    name="section"
    :content-classes="'grid justify-items-center h-max gap-md'"
    :height="'h-lg-y-screen sm:h-[max-content]'"
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
        <IconWithText
          v-for="exchange in exchanges"
          :key="exchange.name"
          :text="exchange.name"
          :link="exchange.link"
          class="w-60"
        >
          <GateIcon v-if="exchange.logo === 'gate'" class="icon" />
          <MexcIcon v-if="exchange.logo === 'mexc'" class="icon" />
          <BitmartIcon v-if="exchange.logo === 'bitmart'" class="icon" />
          <ChangellyIcon v-if="exchange.logo === 'changelly'" class="icon" />
          <SimpleswapIcon v-if="exchange.logo === 'simpleswap'" class="icon" />
          <LetsexchangeIcon
            v-if="exchange.logo === 'letsexchange'"
            class="icon"
          />
        </IconWithText>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { URLS } from '../../constants.js'
import GateIcon from '@/assets/svg/gate.svg?component'
import MexcIcon from '@/assets/svg/mexc.svg?component'
import BitmartIcon from '@/assets/svg/bitmart.svg?component'
import ChangellyIcon from '@/assets/svg/changelly.svg?component'
import SimpleswapIcon from '@/assets/svg/simpleswap.svg?component'
import LetsexchangeIcon from '@/assets/svg/letsexchange.svg?component'

const { t } = useI18n()
const exchanges: Array<any> = [
  {
    name: t('buy-section.exchanges.gate'),
    logo: 'gate',
    link: URLS.gate,
  },
  {
    name: t('buy-section.exchanges.mexc'),
    logo: 'mexc',
    link: URLS.mexc,
  },
  {
    name: t('buy-section.exchanges.bitmart'),
    logo: 'bitmart',
    link: URLS.bitmart,
  },
  {
    name: t('buy-section.exchanges.changelly'),
    logo: 'changelly',
    link: URLS.changelly,
  },
  {
    name: t('buy-section.exchanges.simpleswap'),
    logo: 'simpleswap',
    link: URLS.simpleSwap,
  },
  {
    name: t('buy-section.exchanges.letsexchange'),
    logo: 'letsexchange',
    link: URLS.letsexchange,
  },
]
</script>

<style scoped lang="scss">
.icon {
  width: 40px;
  height: 40px;
}
</style>
