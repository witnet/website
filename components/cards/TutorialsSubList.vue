<template>
  <WCard :type="CardType.Base">
    <template #header
      ><h3 class="title-h5">{{ title }}</h3></template
    >
    <template #description>
      <ul class="marker:text-wit-blue-500 grid gap-md">
        <li
          v-for="tutorial in tutorials"
          :key="tutorial.name"
          class="list-disc link-list-item ml-md"
        >
          <TutorialLink
            :key="tutorial.name"
            class="block"
            :name="tutorial.name"
            :url="tutorial.url"
          />
        </li>
      </ul>
    </template>
  </WCard>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { WCard, CardType } from 'wit-vue-ui'
import type { TutorialLink } from '~/types'

defineProps({
  title: {
    type: String,
    required: true,
  },
  tutorials: {
    type: Array as PropType<TutorialLink[]>,
    required: true,
  },
})
</script>

<style>
.title-h2 {
  font-weight: bold;
}

/* TODO */
.rounded-lg {
  border-radius: 1rem;
}
.hr {
  height: 3px;
  background-color: black; /* Modern Browsers */
}
</style>
