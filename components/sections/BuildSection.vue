<template>
<div class="flex flex-col">
  <div class="flex flex-col items-center">
    <!-- <h3 class="title-h1 mb-lg">{{ t('build-section.title') }}</h3> -->

    <i18n-t keypath="build-section.title.key_features" class="title-h1 mb-lg" tag="h3">
      <span class="blue">{{ $t('build-section.title.dot') }}</span>
    </i18n-t>

    <p class="description text mb-lg max-w-2xl text-center">{{ t('build-section.description') }}</p>
  </div>

  <div class="grid grid-cols-2 p-xl gap-xl">
    <!-- <h2 class="title-h2">{{ $t('build-section.title') }}</h2> -->
    <BuildWithWitnet
      v-for="(reason, index) in reasons"
      :index="index + 1"
      :key="reason.title"
      :title="reason.title"
      :description="reason.description"
    />
  </div>
</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
type Reason = {
  title: string
  description: string
}
const reasons: Array<Reason> = [
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
]
</script>

<style scoped lang="scss">
.blue {
  color: $blue;
}
</style>