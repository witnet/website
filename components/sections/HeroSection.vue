<template>
  <NuxtLayout
    name="section"
    :center-left-content="false"
    :content-classes="'hero p-[24px_100px] sm:[&.hero]:p-[0px_32px] xs:p-[0px_16px]'"
    :section-animation="false"
    :height="'h-lg-y-screen max-h-[900px] md:max-h-[100vh]'"
  >
    <template #content>
      <div
        class="h-full grid auto-rows-min content-center gap-y-lg justify-items-center relative"
        @mousemove="startMoveAnimation"
        @mouseleave="stopMoveAnimation"
        @mouseout="stopMoveAnimation"
      >
        <DottedBg
          class="absolute z-0 h-2-md-y-screen max-h-[700px] md:max-h-full md:top-lg sm:w-max sm:h-auto sm:top-auto sm:bottom-lg overflow-hidden"
        />
        <div
          ref="plusIcon"
          class="animation1 absolute h-max w-max left-xl top-[450px] z-10 overflow-hidden sm:hidden lg:top-[280px] md:bottom-[30vh] md:top-auto md:right-md"
        >
          <Plus />
        </div>
        <div
          ref="zigzagIcon"
          class="animation1 absolute left-xl bottom-xl z-10 overflow-hidden sm:hidden md:bottom-[15vh] md:left-[3vw]"
        >
          <Zigzag />
        </div>
        <div
          ref="squareIcon"
          class="animation1 absolute left-xl top-xl z-10 sm:hidden md:top-[8vh] md:left-[3vw]"
        >
          <SquareDots />
        </div>
        <div
          ref="plusIcon2"
          class="animation1 absolute right-xl top-[300px] z-10 overflow-hidden rotate-90 sm:hidden md:top-[25vh] md:right-[3vw]"
        >
          <Plus />
        </div>
        <div
          ref="zigzagIcon2"
          class="animation1 absolute right-xl top-xl z-10 overflow-hidden rotate-90 sm:hidden md:top-[8vh] md:right-[3vw]"
        >
          <Zigzag />
        </div>
        <div
          ref="squareIcon2"
          class="animation1 absolute right-xl bottom-xl z-10 sm:hidden md:bottom-[15vh]"
        >
          <SquareDots />
        </div>
        <div
          ref="textTarget"
          class="grid auto-rows-min gap-y-lg z-20 max-w-[600px] sm:mt-xl"
        >
          <i18n-t
            keypath="hero.title.main"
            class="title-h1 text-center"
            tag="h1"
            scope="global"
          >
            <br />
            <span ref="myText">{{ $t('hero.title.main-key-1') }}</span>
            <span>{{ $t('hero.title.oracle') }}</span>
            <br />
            <span ref="myText2" class="text-wit-blue-500 gradient">{{
              $t('hero.title.gradient')
            }}</span>
            <!-- TODO: uncomment when translation requires it -->
            <!-- <i18n-t
              keypath="hero.title.gradient"
              class="text-wit-blue-500 gradient"
              tag="span"
              scope="global"
            >
              <span class="break">-</span>
            </i18n-t> -->
          </i18n-t>

          <h2 class="text text-center">{{ $t('hero.description') }}</h2>
        </div>
        <!-- TODO: Uncomment when url or action is provided -->
        <!-- <CustomButton :type="ButtonType.primary" class="z-20">
          {{ $t('hero.action') }}
        </CustomButton> -->
        <NuxtLink
          to="#WhatIsWitnet"
          rel="home"
          class="arrow flex justify-items-center"
        >
          <ArrowDownIcon class="m-xl z-20 w-[40px]" />
        </NuxtLink>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { ButtonType } from '@/types'
import { useElementVisibility } from '@vueuse/core'
import ArrowDownIcon from '@/assets/svg/arrow_down.svg?component'
import DottedBg from '@/assets/svg/dotted_background.svg?component'
import Plus from '@/assets/svg/plus.svg?component'
import Zigzag from '@/assets/svg/zigzag.svg?component'
import SquareDots from '@/assets/svg/square-dots.svg?component'
const { gsap } = useGsap()
const { t } = useI18n()
const textTarget = ref(null)
const targetIsVisible = useElementVisibility(textTarget)
const interval: Ref<NodeJS.Timeout | null> = ref(null)
const heroKeyWords = [
  t('hero.title.main-key-1'),
  t('hero.title.main-key-2'),
  t('hero.title.main-key-3'),
  t('hero.title.main-key-4'),
]
const zigzagIcon = ref(null)
const zigzagIcon2 = ref(null)
const plusIcon = ref(null)
const squareIcon = ref(null)
const plusIcon2 = ref(null)
const squareIcon2 = ref(null)
const myText = ref(null)
const myText2 = ref(null)
const textKeyIndex = ref(0)
const svgElm: { elm: any }[] = [
  {
    elm: zigzagIcon,
  },
  {
    elm: plusIcon,
  },
  {
    elm: squareIcon,
  },
  {
    elm: zigzagIcon2,
  },
  {
    elm: plusIcon2,
  },
  {
    elm: squareIcon2,
  },
]

onMounted(() => {
  startInitialAnimation()
})

function startInitialAnimation() {
  gsap.from(zigzagIcon.value, {
    y: 1700,
    x: -200,
    ease: 'power2.out',
    opacity: 0,
  })
  gsap.from(plusIcon.value, {
    y: 200,
    x: -700,
    ease: 'power2.out',
    opacity: 0,
  })
  gsap.from(squareIcon.value, {
    y: -100,
    x: -500,
    ease: 'power2.out',
    opacity: 0,
  })
  gsap.from(zigzagIcon2.value, {
    y: 1700,
    x: 200,
    ease: 'power2.out',
    opacity: 0,
  })
  gsap.from(plusIcon2.value, {
    y: 200,
    x: 700,
    ease: 'power2.out',
    opacity: 0,
  })
  gsap.from(squareIcon2.value, {
    y: -100,
    x: 500,
    ease: 'power2.out',
    opacity: 0,
  })
}

watch(targetIsVisible, () => {
  if (!targetIsVisible.value && interval.value) {
    textKeyIndex.value = 0
    clearInterval(interval.value)
  } else {
    setTextAnimationInterval()
  }
})

function startMoveAnimation(e: any) {
  svgElm.forEach((icon, index) => {
    gsap.killTweensOf(icon.elm.value)
    gsap.to(icon.elm.value, {
      translateX: e.movementX < 20 && e.movementX > -20 ? e.movementX : 0,
      translateY: e.movementY < 20 && e.movementY > -20 ? e.movementY : 0,
      ease: 'elastic.out(1,0.3)',
      duration: index + 1,
    })
  })
}
function stopMoveAnimation() {
  svgElm.forEach((icon) => {
    gsap.to(icon.elm.value, {
      translateX: 0,
      translateY: 0,
      ease: 'elastic.out(1,0.3)',
      duration: 1,
    })
    setTimeout(() => {
      gsap.killTweensOf(icon.elm.value)
    }, 2000)
  })
}
function changeHeroKeyWordIndex() {
  if (textKeyIndex.value < heroKeyWords.length - 1) {
    textKeyIndex.value += 1
  } else {
    textKeyIndex.value = 0
  }
}
function changeTextAnimation() {
  gsap.to(myText.value, {
    duration: 2,
    text: heroKeyWords[textKeyIndex.value],
    delay: 1,
  })
  changeHeroKeyWordIndex()
}
function setTextAnimationInterval() {
  changeTextAnimation()
  interval.value = setInterval(() => changeTextAnimation(), 3000)
}
</script>

<style scoped lang="scss">
.arrow {
  padding: 40px;
  margin: -40px;
  height: auto;
  animation: down 1s infinite alternate;
}

.break {
  display: none;
}

@media (max-width: 500px) {
  .break {
    display: inline-block;
  }
}
@keyframes down {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-30px);
  }
}
</style>
