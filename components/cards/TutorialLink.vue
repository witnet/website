<template>
  <a :href="url">
    <h4>{{ name }}</h4>
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
