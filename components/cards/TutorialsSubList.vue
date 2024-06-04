<template>
  <div class="border-2 border-black-950 rounded-lg px-xl py-md m-sm">
    <h3 class="title-h4">{{ title }}</h3>

    <hr class="hr my-md">

    <ul>
      <li v-for="tutorial in tutorials"
      class="list-disc list-inside"
      >
        <TutorialLink
          class="block"
          :key="tutorial.name"
          :name="tutorial.name"
          :url="tutorial.url"
        />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
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
  background-color: black;  /* Modern Browsers */
}
</style>