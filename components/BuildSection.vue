<template>
  <div>
    <h2>{{ $t('build-section.title') }}</h2>
    <BuildCard
      v-for="reason in reasons"
      :key="reason.title"
      :title="reason.title"
      :description="reason.description"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
type Reason = {
  title: string
  description: string
}
const reasons: Ref<Array<Reason>> = ref([
  {
    title: t('build-section.title-1'),
    description: t('build-section.description-1'),
  },
  {
    title: t('build-section.title-2'),
    description: t('build-section.description-2'),
  },
  {
    title: t('build-section.title-3'),
    description: t('build-section.description-3'),
  },
  {
    title: t('build-section.title-4'),
    description: t('build-section.description-4'),
  },
  {
    title: t('build-section.title-5'),
    description: t('build-section.description-5'),
  },
  {
    title: t('build-section.title-6'),
    description: t('build-section.description-6'),
  },
])
</script>
