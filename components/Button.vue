<template>
  <button
    :class="[type, 'button']"
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
  font-size: 1rem;
  font-weight: bold;
  border: none;
  margin-right: 10px;
  margin-bottom: 5px;
  background-color: transparent;
  border-radius: 55px;
  padding: 16px 38px 16px 22px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  min-width: 180px;
  position: relative;
  text-align: left;
  letter-spacing: -0.02em;

  .arrow {
    position: absolute;
    right: 20px;
    top: 24px;
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
  &:hover {
    background: $grey-1;
    color: $black;
  }
  &:active {
    background: $grey-3;
    color: $black;
  }
}

.default {
  background: transparent;
  color: $black;
  border: 2px solid $black;
  padding: 14px 20px;
  &:hover {
    background: transparent;
    color: $purple-1;
    border: 2px solid $purple-1;
  }
  &:active {
    background: $purple-1;
    color: $white;
    border: 2px solid $purple-1;
  }
  .arrow {
    top: 22px;
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
  &:hover {
    background: $green-2;
    color: $white;
  }
  &:active {
    background: $aquamarine-1;
    color: $white;
  }
}
</style>
