<template>
  <div class="!border-black section w-full flex justify-center p-xl">
    <div class="content grid grid-cols-3">
      <h2 class="title-h1 mr-sm">{{ $t('explore.title') }}</h2>
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