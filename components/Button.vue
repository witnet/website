<template>
  <button
    :class="[type, size, 'button']"
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
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['small', 'normal'].includes(value)
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
  padding: 18px 38px 18px 22px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  min-width: 180px;
  position: relative;
  text-align: left;
  letter-spacing: -0.02em;
  line-height: 1rem;

  .arrow {
    position: absolute;
    right: 20px;
    top: 21px;
    margin-left: 8px;
    height: 10px;

    &.white {
      filter: brightness(0) invert(1);
    }
  }
}
.small {
  min-width: 0;
  margin-right: 0;
  margin-bottom: 0;
  font-weight: normal;
  padding: 14px 22px 14px 22px;
  .arrow {
    display: none;
  }
}
.secondary {
  background: $grey-2;
  color: $darkest-blue;
  &:hover {
    background: $grey-1;
    color: $darkest-blue;
  }
  &:active {
    background: $grey-3;
    color: $darkest-blue;
  }
}

.default {
  background: transparent;
  color: $darkest-blue;
  border: 1px solid $darkest-blue;
  padding: 16px 38px 16px 22px;
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
  .arrow {
    top: 20px;
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
