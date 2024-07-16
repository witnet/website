<template>
  <CustomButton :type="ButtonType.terciary">
    <span class="flex items-center">
      <slot></slot>
      <ArrowRightIcon class="arrow ml-md"></ArrowRightIcon>
    </span>
  </CustomButton>
</template>

<script setup>
import { ButtonType } from '@/types'

import ArrowRightIcon from '@/assets/svg/arrow_right.svg?component'
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

.arrow {
  height: 14px;
}
</style>
