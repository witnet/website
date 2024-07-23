<template>
  <NuxtLayout
    name="section"
    :content-classes="'grid justify-items-center gap-md'"
  >
    <template #content>
      <i18n-t
        keypath="tutorials.title.text"
        class="title-h2"
        tag="h2"
        scope="global"
      >
        <span class="text-wit-blue-500">{{ $t('tutorials.title.dot') }}</span>
      </i18n-t>
      <p class="text text-center section-description-max-w">
        {{ t('tutorials.description') }}
      </p>
      <div
        class="grid grid-cols-3 text-black-950 justify-items-center gap-md mt-lg lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <TutorialsSubList
          v-for="tutorialList in tutorials"
          :key="tutorialList.title"
          class="w-full"
          :tutorials="tutorialList.tutorialLinks"
          :title="tutorialList.title"
        />
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { TutorialList } from '@/types'
import { URLS } from '@/constants'
const { t } = useI18n()

// TODO: add urls
const tutorials: Array<TutorialList> = [
  {
    title: t('tutorials.web.title'),
    tutorialLinks: [
      {
        name: t('tutorials.web.tutorial-1'),
        url: URLS.http_requests,
      },
      {
        name: t('tutorials.web.tutorial-2'),
        url: URLS.graph_ql,
      },
      {
        name: t('tutorials.web.tutorial-3'),
        url: URLS.dynamic_requests,
      },
      {
        name: t('tutorials.web.tutorial-4'),
        url: URLS.api_reference,
      },
    ],
  },
  {
    title: t('tutorials.price.title'),
    tutorialLinks: [
      {
        name: t('tutorials.price.tutorial-1'),
        url: URLS.price_feed_routes,
      },
      {
        name: t('tutorials.price.tutorial-2'),
        url: URLS.reading_price_pairs,
      },
      {
        name: t('tutorials.price.tutorial-3'),
        url: URLS.price_api_reference,
      },
      {
        name: t('tutorials.price.tutorial-4'),
        url: URLS.multichain_addresses,
      },
    ],
  },
  {
    title: t('tutorials.randomness.title'),
    tutorialLinks: [
      {
        name: t('tutorials.randomness.tutorial-1'),
        url: URLS.generating_rng,
      },
      {
        name: t('tutorials.randomness.tutorial-2'),
        url: URLS.low_level_request,
      },
      {
        name: t('tutorials.randomness.tutorial-3'),
        url: URLS.solidity_api,
      },
      {
        name: t('tutorials.randomness.tutorial-4'),
        url: URLS.randomness_addresses,
      },
    ],
  },
]
</script>

<style scoped>
.description {
}
</style>
