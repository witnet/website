<template>
  <button class="btn" :class="[type]">
    <div class="btn-content">
      <slot> </slot>
      <svg
        class="arrow-right"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="arrow"
          d="M18.6192 6.13623H11.5485M18.6192 6.13623L18.6188 13.2073M18.6192 6.13623L5.89124 18.8642"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
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
