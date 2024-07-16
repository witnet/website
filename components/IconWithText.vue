<template>
  <a :href="link">
    <div class="flex items-center">
      <RoundedIcon class="mr-md">
        <slot></slot>
      </RoundedIcon>
      <p class="text-link">{{ text }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>
