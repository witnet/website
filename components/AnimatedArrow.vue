<template>
  <div ref="arrow">
    <ArrowRightIcon class="arrow ml-md h-[14px]"></ArrowRightIcon>
  </div>
</template>

<script setup>
import ArrowRightIcon from '@/assets/svg/arrow_right.svg?component'
const { gsap } = useGsap()
const arrow = ref(null)

const props = defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
})

const hover = computed(() => props.hover)

watch(hover, (value) => {
  if (value) {
    gsap.to(arrow.value, {
      translateX: 8,
      ease: 'circ.out',
      yoyo: true,
      repeat: -1,
    })
  } else {
    gsap.killTweensOf(arrow.value)
    gsap.to(arrow.value, {
      translateX: 0,
    })
  }
})
</script>
