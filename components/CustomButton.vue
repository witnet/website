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

<style scoped lang="scss">
.btn {
  font-size: 1rem;
  &:hover {
    transform: translate(3, 7px);
  }
}

.btn-terciary {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
