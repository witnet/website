<template>
  <div
    v-if="showBanner"
    class="fixed w-screen h-[80px] md:h-[150px] sm:h-[200px] top-[0px] z-40 bg-black-950 flex md:flex-col justify-between items-center gap-md py-md px-lg md:px-md"
  >
    <div
      class="grid grid-rows-[max-content_max-content] items-center gap-xs md:w-full md:pr-lg"
    >
      <p class="title text-white-50">{{ $t('banner.title') }}</p>
      <p class="subtitle text-white-200">
        {{ $t('banner.description') }}
      </p>
    </div>
    <div
      class="flex gap-xl md:gap-[0px] md:w-full md:justify-between items-center mr-lg md:mr-[0px]"
    >
      <div class="grid">
        <div class="grid grid-cols-4 gap-xs justify-items-center items-center">
          <p class="countdown-number">
            {{ getFormatedCount(days) }}
          </p>
          <p class="countdown-number">
            {{ getFormatedCount(hoursFormated) }}
          </p>
          <p class="countdown-number">
            {{ getFormatedCount(minutesFormated) }}
          </p>
          <p class="countdown-number">
            {{ getFormatedCount(secondsFormated) }}
          </p>
          <p class="countdown-label">Days</p>
          <p class="countdown-label">Hrs</p>
          <p class="countdown-label">Mins</p>
          <p class="countdown-label">Secs</p>
        </div>
      </div>
      <WButton :type="ButtonType.dark">
        <a href="#" target="_blank">{{ $t('banner.action') }}</a>
      </WButton>
    </div>
  </div>
  <div class="m-sm -p-sm" @click="closeBanner">
    <CloseNav
      v-if="showBanner"
      class="w-[24px] cursor-pointer fixed top-[24px] right-md md:top-md z-40"
    />
  </div>
</template>
<script setup lang="ts">
import { WButton, ButtonType } from 'wit-vue-ui'
import { BANNER_END_DATE } from '@/constants'
import CloseNav from '@/assets/svg/close-nav.svg?component'

const targetTime = new Date(BANNER_END_DATE).getTime()
const currentTime = ref(new Date().getTime())
const timeRemaining = ref(targetTime - currentTime.value)
const showBanner = ref(true)
const emit = defineEmits(['close-banner'])

let intervalId: NodeJS.Timeout

onMounted(() => (intervalId = setInterval(updateTimer, 1000)))

onBeforeUnmount(() => clearInterval(intervalId))
function closeBanner() {
  showBanner.value = false
  emit('close-banner')
}
function updateTimer() {
  currentTime.value = new Date().getTime()
  timeRemaining.value = Math.max(0, targetTime - currentTime.value)
}
function getFormatedCount(number: number) {
  const strNumber = number.toString()
  return strNumber.length < 2 ? `0${strNumber}` : strNumber
}
const seconds = computed(() => Math.floor(timeRemaining.value / 1000))
const minutes = computed(() => Math.floor(seconds.value / 60))
const hours = computed(() => Math.floor(minutes.value / 60))
const days = computed(() => Math.floor(hours.value / 24))
const secondsFormated = computed(() => seconds.value % 60)
const minutesFormated = computed(() => minutes.value % 60)
const hoursFormated = computed(() => hours.value % 24)
</script>

<style lang="scss" scoped>
.countdown-label {
  @apply subtitle text-white-200 w-[40px] text-center;
}
.countdown-number {
  @apply title-h5 text-white-50;
}
</style>
