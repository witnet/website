<template>
  <button :class="[color, 'button']" :style="{ fontSize: fontSize + 'px' }">
    <slot />
    <img
      class="angle-bracket"
      src="@/assets/svg/angle_bracket_closed.svg"
      alt="Angle bracket closed"
    />
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
      default: 'plain',
      validator(value) {
        return ['plain', 'gradient'].includes(value)
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
  border-radius: 32px;
  padding: 12px 16px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;

  &.plain {
    color: black;
    background: #e6e6f5;
  }

  &.gradient {
    background: #5fbfae;
    color: white;
  }

  &:hover {
    background: #468d80;
  }

  &:active {
    background: #468d80;
  }

  .angle-bracket {
    height: 10px;
  }
}
</style>
