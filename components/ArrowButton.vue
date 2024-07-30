<template>
  <CustomButton
    :type="ButtonType.terciary"
    @mouseenter="toggleHover()"
    @mouseleave="toggleHover()"
  >
    <span class="flex items-center">
      <slot></slot>
      <AnimatedArrow :hover="hover" />
    </span>
  </CustomButton>
</template>

<script setup>
import { ButtonType } from '@/types'

const hover = ref(false)

function toggleHover() {
  hover.value = !hover.value
}
defineProps({
  type: {
    type: String,
    default: ButtonType.primary,
    validator(value) {
      return Object.values(ButtonType).includes(value)
    },
  },
})
</script>

<style scoped>
.btn {
  font-size: 1rem;
}
</style>
