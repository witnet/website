<template>
  <div class="group inline relative">
    <slot></slot>
    <span
      :class="`${bgColor} ${textColor}`"
      class="py-sm px-sm rounded-lg group-hover:opacity-100 transition-opacity text-sm rounded-md absolute bottom-full -translate-x-1/2 mb-sm opacity-0"
      >{{ tooltipText }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  tooltipText: {
    type: String,
    required: true,
  },
})
</script>
