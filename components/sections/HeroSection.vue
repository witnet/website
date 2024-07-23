<template>
  <NuxtLayout
    name="section"
    :center-left-content="false"
    :content-classes="'p-[24px_100px] sm:p-[0px_32px] xs:p-[0px_16px]'"
    :height="'h-lg-y-screen sm:h-[max-content] max-h-[900px]'"
  >
    <template #content>
      <div
        class="h-full grid auto-rows-min content-center gap-y-lg justify-items-center relative"
      >
        <DottedBg
          class="absolute z-0 h-2-md-y-screen max-h-[700px] overflow-hidden"
        />
        <Plus
          class="absolute left-xl top-[450px] z-10 overflow-hidden sm:hidden lg:top-[280px] md:top-[550px] md:right-lg"
        />
        <Zigzag
          class="absolute left-xl bottom-xl z-10 overflow-hidden sm:hidden md:bottom-sm"
        />
        <SquareDots class="absolute left-xl top-xl z-10 sm:hidden md:top-sm" />
        <Plus
          class="absolute right-xl top-[300px] z-10 overflow-hidden sm:hidden lg:top-[180px] md:top-[150px] md:right-lg"
        />
        <Zigzag
          class="absolute right-xl top-xl z-10 overflow-hidden rotate-90 sm:hidden md:top-sm"
        />
        <SquareDots
          class="absolute right-xl bottom-xl z-10 sm:hidden md:bottom-sm"
        />
        <div class="grid auto-rows-min gap-y-lg z-20 max-w-[600px]">
          <i18n-t
            keypath="hero.title.main"
            class="title-h1 text-center"
            tag="h1"
            scope="global"
          >
            <br />
            {{ $t('hero.title.main2') }}
            <i18n-t
              keypath="hero.title.gradient"
              class="text-wit-blue-500 gradient"
              tag="span"
              scope="global"
            >
              <span class="break">-</span>
            </i18n-t>
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

<script setup>
// import { ButtonType } from '@/types'
import ArrowDownIcon from '@/assets/svg/arrow_down.svg?component'
import DottedBg from '@/assets/svg/dotted_background.svg?component'
import Plus from '@/assets/svg/plus.svg?component'
import Zigzag from '@/assets/svg/zigzag.svg?component'
import SquareDots from '@/assets/svg/square-dots.svg?component'
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
