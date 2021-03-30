<template>
  <button
    :class="[type, 'button']"
    :style="{ fontSize: fontSize + 'px' }"
    @mouseover="angle = type === 'default' ? anglePurple : angle"
    @mouseleave="angle = angleBlack"
  >
    <slot />
    <img
      class="arrow"
      :class="{ white: isWhiteArrow }"
      :src="angle"
      alt=""
      aria-hidden="true"
    />
  </button>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'secondary', 'primary'].includes(value)
      },
    },
  },
  data() {
    return {
      angleBlack: require('@/assets/images/angle_bracket_closed.svg'),
      anglePurple: require('@/assets/images/angle_bracket_closed_purple.svg'),
      angle: require('@/assets/images/angle_bracket_closed.svg'),
    }
  },
  computed: {
    isWhiteArrow() {
      return this.type === 'primary'
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  margin-right: 16px;
  background-color: transparent;
  border-radius: 25px;
  padding: 12px 16px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;

  .arrow {
    margin-left: 8px;
    height: 10px;

    &.white {
      filter: brightness(0) invert(1);
    }
  }
}
.secondary {
  background: $grey-2;
  color: $black;
  &:active {
    background: $grey-3;
    color: $black;
  }
  &:hover {
    background: $grey-1;
    color: $black;
  }
}

.default {
  background: transparent;
  color: $black;
  border: 1px solid $black;
  &:hover {
    background: transparent;
    color: $purple-1;
    border: 1px solid $purple-1;
  }
  &:active {
    background: $purple-1;
    color: $white;
    border: 1px solid $purple-1;
  }
}

.primary {
  background: linear-gradient(
    90deg,
    $aquamarine-1 0%,
    $aquamarine-1 43%,
    $green-2 100%
  );
  color: $white;
  &:active {
    background: $aquamarine-1;
    color: $white;
  }
  &:hover {
    background: $green-2;
    color: $white;
  }
}
</style>
