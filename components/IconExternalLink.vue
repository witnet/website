<template>
  <a :aria-label="url" class="link" :href="url" target="_blank">
    <icon :class="`icon h-auto ${width} p-[16px] -m-[16px]`" />
  </a>
</template>
<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: 'w-[50px]',
  },
  icon: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss">
.icon {
  .social-icon {
    @apply fill-white-400 transition-all;
  }
}
.icon:hover > .social-icon {
  @apply fill-white-500;
}
</style>
