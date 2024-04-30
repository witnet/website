<template>
  <a class="link" :href="url" target="_blank">
    <icon class="h-auto w-lg" />
  </a>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: Object as PropType<String>,
    required: true,
  },
})
</script>
