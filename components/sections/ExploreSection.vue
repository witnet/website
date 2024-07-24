<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-wit-blue-500 px-[0px]'"
    :content-classes="'grid justify-items-center'"
  >
    <template #content>
      <div class="flex self-center sm:w-96 justify-self-center items-center">
        <ArrowTurnRightIcon class="arrow m-md" />

        <i18n-t
          keypath="explore.title.main"
          class="title-h2 font-bold mr-0 sm:mr-sm text-white-50 h-max"
          tag="h2"
          scope="global"
        >
          <span class="text-black-950">{{ $t('explore.title.witnet') }}</span>
        </i18n-t>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-1 gap-lg mt-lg">
        <ExplorerLink
          v-for="explorer in explorers"
          :key="explorer.title"
          class="min-w-80"
          shadow-color="black"
          :title="explorer.title"
          :url="explorer.url"
          ><template #description
            ><p class="text-black-950">{{ explorer.description }}</p></template
          ></ExplorerLink
        >
      </div>
    </template>
  </NuxtLayout>
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
    url: URLS.data_feeds_explorer,
  },
  {
    title: t('explore.explorer-2.title'),
    description: t('explore.explorer-2.description'),
    url: URLS.block_explorer,
  },
]
</script>

<style scoped>
.arrow {
  width: 90px;
}
</style>
