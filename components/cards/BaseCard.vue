<template>
  <div class="card-border" :style="{ padding: padding + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    padding: {
      type: Number,
      default: 32,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-border {
  height: max-content;
  justify-content: left;
  border: 2px solid $white;
  background-color: $white;
  position: relative;
  z-index: 10;
  border-radius: 4px;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  align-items: center;
}
.card-border::after {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  top: -16px;
  left: -16px;
  right: 8px;
  bottom: 8px;
  border: 2px solid $grey-4;
  border-radius: 4px;
}
</style>
