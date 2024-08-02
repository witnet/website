<template>
  <div :class="`relative overflow-hidden`">
    <div id="animation-container" :class="`w-full h-full ${frameClasses}`">
      <div
        ref="content"
        :class="`content p-[100px] m-[0_auto] max-w-[1100px] w-full sm:p-[70px_32px] xs:p-[70px_16px] z-50 ${height} ${contentClasses}`"
      >
        <slot name="content"></slot>
      </div>
    </div>
    <div
      class="sm:hidden"
      :class="
        centerLeftContent
          ? 'absolute top-[0px] left-[0px] md:hidden'
          : 'absolute top-[0px] left-sm-x-screen lg:left-lg md:left-md'
      "
    >
      <slot name="left"></slot>
    </div>
    <div
      class="sm:hidden"
      :class="'absolute top-[-210px] left-auto w-screen flex justify-center'"
    >
      <slot name="top"></slot>
    </div>
    <div
      class="sm:hidden"
      :class="
        centerLeftContent
          ? 'sm:hidden absolute top-[0px] right-[-230px] h-full w-auto flex items-center md:hidden'
          : 'absolute top-[0px] right-sm-x-screen lg:left-lg md:left-md'
      "
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
const { gsap, ScrollTrigger } = useGsap()
const props = defineProps({
  fullBackground: {
    type: Boolean,
  },
  frameClasses: {
    type: String,
    default: '',
  },
  sectionAnimation: {
    type: Boolean,
    default: true,
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
})

onMounted(() => {
  if (props.sectionAnimation) startAnimation()
})

const content = ref(null)

function startAnimation() {
  const tl = gsap.timeline()
  tl.from(content.value, {
    yPercent: 100,
    ease: 'power2.out',
    opacity: 0,
  })
  ScrollTrigger.create({
    trigger: content.value,
    animation: tl,
    markers: true,
    pin: false,
    scrub: true,
    start: '-200% top',
    end: '-120% top',
  })
}
</script>

<style scoped lang="scss">
.animation-container {
  position: relative;
}
</style>
