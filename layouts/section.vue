<template>
  <div class="relative">
    <div :class="`frame ${frameClasses}`">
      <div :class="`section ${height} ${contentClasses}`">
        <slot name="content"></slot>
      </div>
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
    frameClasses: {
      type: String,
      default: '',
    },
    contentClasses: {
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
  padding: 100px;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
}

.frame {
  width: 100%;
}

@media (max-width: 600px) {
  .section {
    padding: 48px 32px;
  }
}

@media (max-width: 350px) {
  .section {
    padding: 32px 16px;
  }
}
</style>
