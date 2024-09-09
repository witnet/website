<template>
  <a :href="url" :aria-label="name" target="_blank" class="link">
    <p class="text">{{ name }}</p>
  </a>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>
