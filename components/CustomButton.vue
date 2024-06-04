<template>
  <button class="btn w-fit px-xl py-md" :class="`btn-${type}`">
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

<style scoped>
.btn {
  font-size: 1rem;
  box-shadow: 3px 7px 0px rgb(0, 0, 0);
}
</style>