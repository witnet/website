<template>
  <div ref="blueStar" class="h-max w-auto">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  sectionId: {
    type: String,
    required: true,
  },
  endPosition: {
    type: String,
    default: '0',
  },
  startPosition: {
    type: String,
    default: 'top top',
  },
})
const { gsap } = useGsap()

const blueStar = ref(null)

onMounted(() => {
  startAnimation()
})

function startAnimation() {
  gsap
    .timeline({
      duration: 5,
      ease: 'slow',
      scrollTrigger: {
        trigger: `#${props.sectionId}`,
        pin: false,
        scrub: 0.5,
        start: props.startPosition,
        markers: true,
        end: props.endPosition,
      },
    })
    .from(blueStar.value, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'linear',
    })
}
</script>
