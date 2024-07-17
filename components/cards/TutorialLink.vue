<template>
  <a :href="url" class="inline-block hover:underline decoration-wit-blue-500">
    <h5>{{ name }}</h5>
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
