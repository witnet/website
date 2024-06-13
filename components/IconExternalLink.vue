<template>
  <a class="link" :href="url" target="_blank">
    <icon :class="`h-auto w-lg ${color} ${width}`" />
  </a>
</template>
<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'fill-white-300',
  },
  width: {
    type: String,
    default: 'w-md',
  },
  icon: {
    type: Object,
    required: true,
  },
})
</script>
