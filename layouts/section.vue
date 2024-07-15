<template>
  <div class="wide-section relative">
    <div
      :class="fullBackground ? `wide-section ${height}` : `section ${height}`"
    >
      <div
        v-if="fullBackground"
        class="section"
        :style="{ background: backgroundColor }"
      >
        <slot name="content"></slot>
      </div>
      <slot v-else name="content"></slot>
    </div>
    <div class="absolute top-[0px] left-[32px]">
      <slot name="left"></slot>
    </div>
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
    height: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.section {
  padding: 48px;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
}

.socials {
  max-width: 1300px;
  justify-content: center;
}

.wide-section {
  width: 100%;
}

.wide-section {
  width: 100%;
}

@media (max-width: 350px) {
  .section {
    padding: 32px 16px;
  }
}
</style>
