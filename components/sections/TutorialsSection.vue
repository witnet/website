<template>
  <NuxtLayout
    name="section"
    :content-classes="'grid justify-items-center gap-md'"
  >
  <template #content>
    <i18n-t keypath="tutorials.title.text" class="title-h2" tag="h2">
      <span class="text-wit-blue-500">{{ $t('tutorials.title.dot') }}</span>
    </i18n-t>
    <p class="text text-center max-w-screen-md">{{ t('tutorials.description') }}</p>
      <div
        class="grid grid-cols-3 text-black-950 justify-items-center gap-md mt-lg lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <TutorialsSubList
          v-for="tutorialList in tutorials"
          class="w-full"
          :key="tutorialList.title"
          :tutorials="tutorialList.tutorialLinks"
          :title="tutorialList.title"
        />
      </div>
  </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { TutorialList } from '@/types'
const { t } = useI18n()

// TODO: add urls
const tutorials: Array<TutorialList> = [
  {
    title: t('tutorials.web.title'),
    tutorialLinks: [
      {
        name: t('tutorials.web.tutorial-1'),
        url: '',
      },
      {
        name: t('tutorials.web.tutorial-2'),
        url: '',
      },
      {
        name: t('tutorials.web.tutorial-3'),
        url: '',
      },
      {
        name: t('tutorials.web.tutorial-4'),
        url: '',
      },
    ],
  },
  {
    title: t('tutorials.price.title'),
    tutorialLinks: [
      {
        name: t('tutorials.price.tutorial-1'),
        url: '',
      },
      {
        name: t('tutorials.price.tutorial-2'),
        url: '',
      },
      {
        name: t('tutorials.price.tutorial-3'),
        url: '',
      },
      {
        name: t('tutorials.price.tutorial-4'),
        url: '',
      },
    ],
  },
  {
    title: t('tutorials.randomness.title'),
    tutorialLinks: [
      {
        name: t('tutorials.randomness.tutorial-1'),
        url: '',
      },
      {
        name: t('tutorials.randomness.tutorial-2'),
        url: '',
      },
      {
        name: t('tutorials.randomness.tutorial-3'),
        url: '',
      },
      {
        name: t('tutorials.randomness.tutorial-4'),
        url: '',
      },
    ],
  },
]
</script>

<style scoped>
.description {
}
</style>
