<template>
  <div class="group inline relative p-[4px] -p-[4px]">
    <slot name="main"></slot>
    <div
      :class="`${bgColor} ${textColor}`"
      class="hidden min-w-[240px] py-md px-md rounded-lg group-hover:inline hover:inline transition-opacity text-sm rounded-md absolute bottom-[16px] translate-x-[-90%] mb-sm"
    >
      <slot name="tooltip"></slot>
    </div>
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
