<template>
  <a :href="url" target="_blank">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </a>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>
