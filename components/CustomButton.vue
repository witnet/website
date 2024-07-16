<template>
  <button class="btn w-fit px-lg py-md" :class="`btn-${type}`">
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
}

.btn-terciary {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
