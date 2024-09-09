<template>
  <div ref="socials">
    <WSocialsBar />
  </div>
</template>
<script setup lang="ts">
import { WSocialsBar } from 'wit-vue-ui'

const socials = ref(null)
const { gsap } = useGsap()
onMounted(() => {
  startAnimation()
})
function startAnimation() {
  gsap.from(socials.value, {
    yPercent: 100,
    ease: 'power2.out',
    opacity: 0,
    duration: 1,
  })
}
</script>
