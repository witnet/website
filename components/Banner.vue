<template>
    <div class="w-full bg-dotted h-xl" :class="[`bg-dotted-${color}`]" />
</template>

<script setup lang="ts">

enum BannerColor {
  blue = 'blue',
  black = 'black',
}

defineProps({
  color: {
    type: String,
    default: 'blue',
    validator(value) {
      return Object.values(BannerColor).includes(value)
    },
  },
})
</script>

<style scoped>
.h-xl {
  height: 60px;
}

.bg-dotted-blue {
    background-image: url('/assets/svg/dots.svg');
    background-size: contain;
}

.bg-dotted-black {
    background-image: url('/assets/svg/dots-black.svg');
    background-size: contain;
}


</style>