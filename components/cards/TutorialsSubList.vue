<template>
  <div>
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
