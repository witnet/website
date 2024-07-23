<template>
  <a
    :href="url"
    target="_blank"
    class="inline-block text-link link-hover-style p-[8px] -m-[8px] -ml-[14px]"
  >
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
