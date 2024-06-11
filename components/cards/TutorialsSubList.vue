<template>
  <div class="border-2 border-black-950 rounded-lg px-xl py-md m-sm">
    <h4>{{ title }}</h4>
    <TutorialLink
      v-for="tutorial in tutorials"
      :key="tutorial.name"
      :name="tutorial.name"
      :url="tutorial.url"
    />
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
  height: 4px;
  background-color: black;  /* Modern Browsers */
}
</style>