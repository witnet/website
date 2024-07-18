<template>
  <div :class="fullBackground ? 'wide-section' : 'section'">
    <div
      v-if="fullBackground"
      class="section"
      :style="{ background: backgroundColor }"
    >
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  // TODO: Improve naming and try to allow receive css variables
  props: {
    fullBackground: {
      type: Boolean,
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.section {
  padding: 16px;
  margin: 0 auto;
  margin-top: 32px;
  max-width: 1300px;
  width: 100%;
}

.wide-section {
  width: 100%;
}

@media (max-width: 1200px) {
  .section {
    margin-top: 0px;
    padding: 32px;
  }
}

@media (max-width: 700px) {
  .section {
    margin-top: 0px;
  }
}

@media (max-width: 300px) {
  .section {
    margin-top: 0px;
    padding: 32px 16px;
  }
}
</style>
