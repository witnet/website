<template>
  <a :href="link" target="_blank">
    <div class="flex items-center icon-container">
      <RoundedIcon class="rounded-icon mr-md">
        <slot></slot>
      </RoundedIcon>
      <p class="text-link font-bold" :class="textColor">{{ text }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    default: 'text-black-950',
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.rounded-icon {
  @apply bg-wit-blue-500;
}
.icon-container:hover > .rounded-icon {
  @apply bg-wit-blue-300;
}
</style>
