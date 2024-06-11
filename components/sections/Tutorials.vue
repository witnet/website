<template>
  <div class="flex flex-col items-center">
    <i18n-t keypath="tutorials.title.text" class="title-h1 mb-lg" tag="h3">
      <span class="text-wit-blue-500">{{ $t('tutorials.title.dot') }}</span>
    </i18n-t>

    <p class="description text mb-lg max-w-xl text-center">{{ t('tutorials.description') }}</p>
    <div class="grid grid-cols-3 max-w-5xl text-black-950">
      <TutorialsSubList
        v-for="tutorialList in tutorials"
        :key="tutorialList.title"
        :tutorials="tutorialList.tutorialLinks"
        :title="tutorialList.title"
      />
    </div>
  </div>
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