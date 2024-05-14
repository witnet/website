<template>
  <a class="link" :href="url" target="_blank">
    <icon class="h-auto w-lg" />
  </a>
</template>
<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
})
</script>
