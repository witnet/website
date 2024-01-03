<template>
  <button class="btn" :class="[type]">
    <div class="btn-content">
      <slot> </slot>
      <ArrowIcon />
    </div>
  </button>
</template>

<script setup>
import { ButtonType } from '@/types'
import ArrowIcon from '@/assets/svg/arrow.svg?component'

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

<style lang="scss" scoped>
.btn {
  width: 100%;
  color: $white;
  padding: 8px 24px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  &:hover .arrow-right {
    transform: translateX(4px) translateY(-2px);
  }
  .arrow-right {
    width: 24px;
  }
  .btn-content {
    font-size: 16px;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, max-content);
  }
  &.primary {
    color: $white;
    -webkit-transition: all 3ms linear;
    -ms-transition: all 3ms linear;
    transition: all 3ms linear;
    background-color: $green;
    border: 1.5px solid $green;
    .arrow {
      stroke: $white;
    }
  }
  &.secondary {
    color: $white;
    -webkit-transition: all 3ms linear;
    -ms-transition: all 3ms linear;
    transition: all 3ms linear;
    border: 1.5px solid $green;
    background-color: transparent;
    .arrow {
      stroke: $white;
    }
  }
  &.disabled {
    color: $black;
    -webkit-transition: all 3ms linear;
    -ms-transition: all 3ms linear;
    transition: all 3ms linear;
    background-color: $white;
    border: none;
    cursor: no-drop;
    opacity: 0.7;
  }
}
</style>
