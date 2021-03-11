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
  border: 1px solid $grey-1;
  background-color: $white;
  box-shadow: 1px 1px 6px 1px $alpha-purple;
  border-radius: 4px;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  align-items: center;
}
</style>
