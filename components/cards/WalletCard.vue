<template>
  <a :href="url" target="_blank">
    <component :is="icon" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </a>
</template>
<script setup lang="ts">
import type { FunctionalComponent } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: Object as PropType<FunctionalComponent>,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>
