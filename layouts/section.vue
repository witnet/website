<template>
  <div class="relative">
    <div :class="`w-full ${frameClasses}`">
      <div
        :class="`p-[100px] m-[0_auto] max-w-[1100px] w-full sm:p-[70px_32px] xs:p-[70px_16px] ${height} ${contentClasses}`"
      >
        <slot name="content"></slot>
      </div>
    </div>
    <div
      class="sm:hidden"
      :class="
        centerLeftContent
          ? 'absolute top-[200px] left-[0px] md:hidden'
          : 'absolute top-[0px] left-sm-x-screen lg:left-lg md:left-md'
      "
    >
      <slot name="left"></slot>
    </div>
    <div
      class="sm:hidden"
      :class="
        centerLeftContent
          ? 'absolute top-[50px] right-[0px] md:hidden'
          : 'absolute top-[0px] right-sm-x-screen lg:left-lg md:left-md'
      "
    >
      <slot name="right"></slot>
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
    centerLeftContent: {
      type: Boolean,
      default: true,
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
