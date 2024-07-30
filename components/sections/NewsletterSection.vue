<template>
  <NuxtLayout
    id="newsletter"
    name="section"
    :frame-classes="'bg-wit-blue-500'"
    :content-classes="'grid justify-start gap-sm py-[184px]'"
  >
    <template #content>
      <h2 class="title-h2-xl">{{ t('newsletter.title') }}</h2>
      <div
        class="grid grid-cols-[max-content_1fr] gap-md justify-items-start items-center"
      >
        <p class="text text-xl">{{ $t('newsletter.subtitle') }}</p>
        <DashesIcon class="w-[80px] h-auto" />
      </div>
      <div class="mt-lg">
        <MailchimpEmbed />
      </div>
    </template>
    <template #right>
      <div ref="blackStar" class="h-max w-auto">
        <BlackStarIcon ref="blackStar" class="sm:hidden w-[460px] h-auto" />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BlackStarIcon from '@/assets/svg/black-star.svg?component'
import DashesIcon from '@/assets/svg/dashes.svg?component'

const { t } = useI18n()
const { gsap } = useGsap()

const blackStar = ref(null)

onMounted(() => {
  startAnimation()
})

function startAnimation() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#newsletter',
        pin: true,
        scrub: 0.5,
        start: 'top top',
        end: '0',
      },
    })
    .to(blackStar.value, {
      rotation: 360 * 5,
      duration: 1,
      ease: 'none',
    })
}
</script>

<style scoped lang="scss">
.dashes {
  width: 100px;
}

.palm {
  transform: rotate(180deg) scaleX(1);
}

.blue {
  background: $blue;
}
</style>
