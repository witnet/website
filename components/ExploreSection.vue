<template>
  <div>
    <h2>{{ $t('explore.title') }}</h2>
    <p>{{ $t('explore.description') }}</p>
    <ExplorerCard
      v-for="explorer in explorers"
      :key="explorer.title"
      :title="explorer.title"
      :description="explorer.description"
      :url="explorer.url"
    />
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
const explorers: Ref<Array<Explorer>> = ref([
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
])
</script>
