<template>
  <NuxtLayout
    id="build"
    name="section"
    :center-left-content="false"
    :content-classes="'grid justify-items-center gap-md'"
  >
    <template #content>
      <i18n-t
        keypath="build-section.title.key_features"
        class="title-h2 text-center section-description-max-w"
        tag="h2"
        scope="global"
      >
        <span class="text-wit-blue-500">{{
          $t('build-section.title.dot')
        }}</span>
      </i18n-t>
      <p class="text text-center section-description-max-w">
        {{ t('build-section.description') }}
      </p>
      <div class="mt-md grid grid-cols-2 gap-md sm:grid-cols-1 md:grid-cols-1">
        <BuildWithWitnet
          v-for="(reason, index) in reasons"
          :key="reason.title"
          :index="index + 1"
          :title="reason.title"
          :description="reason.description"
        />
      </div>
    </template>
  </NuxtLayout>
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
