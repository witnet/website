<template>
  <button class="btn w-fit" :class="`btn-${type}`">
    <slot> </slot>
  </button>
</template>

<script setup>
import { ButtonType } from '@/types'

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
