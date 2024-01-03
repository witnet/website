<template>
  <a :href="url" target="_blank">
    <h5>{{ name }}</h5>
    <component :is="icon" />
  </a>
</template>
<script setup lang="ts">
import type { FunctionalComponent } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: Object as PropType<FunctionalComponent>,
    required: true,
  },
})
</script>
