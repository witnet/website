<template>
  <a :href="url" :aria-label="name" target="_blank" class="link">
    <p>{{ name }}</p>
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
