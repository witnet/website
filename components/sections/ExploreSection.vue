<template>
  <div class="!border-black section w-full flex justify-center p-xl">
    <div class="content grid grid-cols-3">
      <div class="flex">
        <ArrowTurnRightIcon class="arrow m-md"/>
        <!-- <h2 class="title-h1 mr-sm">{{ $t('explore.title') }}</h2> -->

        <i18n-t keypath="explore.title.main" class="title-h2 mr-sm white" tag="h2">
          <span class="text-black-950">{{ $t('explore.title.witnet') }}</span>
        </i18n-t>
      </div>
      
      <ExplorerLink
        v-for="explorer in explorers"
        :key="explorer.title"
        :title="explorer.title"
        :description="explorer.description"
        :url="explorer.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { URLS } from '@/constants'
import ArrowTurnRightIcon from '@/assets/svg/arrow_turn_right.svg?component'

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
    url: URLS.dataFeedsExplorer,
  },
  {
    title: t('explore.explorer-2.title'),
    description: t('explore.explorer-2.description'),
    url: URLS.blockExplorer,
  },
]
</script>

<style scoped>
.white {
  color: white;
}

.arrow {
  width: 90px
}

.title-h1 {
  color: white;
}

.section {
  background: #00E2ED;
}

.content {
  max-width: 1100px;
}
</style>