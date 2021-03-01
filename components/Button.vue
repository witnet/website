<template>
  <button :class="[color, 'button']" :style="{ fontSize: fontSize + 'px' }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    fontSize: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: 'black',
      validator(value) {
        return ['white', 'black'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid $white;
  margin-right: 16px;
  background-color: transparent;
  border-radius: 5px;
  padding: 12px 16px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;

  &.white {
    color: $white;
    border-color: $white;
  }

  &.black {
    color: $black;
    border-color: $black;
  }

  &:hover {
    color: $green-1;
    border-color: $green-1;
  }

  &:active {
    color: $green-2;
    border-color: $green-2;
  }
}
</style>
