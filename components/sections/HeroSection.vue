<template>
  <NuxtLayout
    name="section"
    :height="'h-lg-y-screen sm:h-[max-content] max-h-[900px]'"
  >
    <div
      class="h-full grid auto-rows-min content-center gap-y-lg justify-items-center relative"
    >
      <DottedBg
        class="absolute z-0 h-2-md-y-screen max-h-[700px] overflow-hidden"
      />
      <Plus
        class="absolute left-xl top-[450px] z-10 overflow-hidden sm:hidden"
      />
      <Zigzag
        class="absolute left-xl bottom-xl z-10 overflow-hidden sm:hidden"
      />
      <SquareDots class="absolute left-xl top-xl z-10 sm:hidden" />
      <Plus
        class="absolute right-xl top-[300px] z-10 overflow-hidden sm:hidden"
      />
      <Zigzag
        class="absolute right-xl top-xl z-10 overflow-hidden rotate-90 sm:hidden"
      />
      <SquareDots class="absolute right-xl bottom-xl z-10 sm:hidden" />
      <div class="grid auto-rows-min gap-y-lg max-w-c-3xl z-20">
        <i18n-t keypath="hero.title.main" class="title-h1 text-center" tag="h1">
          <span class="blue">{{ $t('hero.title.gradient') }}</span>
        </i18n-t>

        <h2 class="text text-center">{{ $t('hero.description') }}</h2>
      </div>

      <CustomButton :type="ButtonType.primary" class="z-20">
        {{ $t('hero.action') }}
      </CustomButton>

      <ArrowDownIcon class="m-xl z-20" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ButtonType } from '@/types'
import ArrowDownIcon from '@/assets/svg/arrow_down.svg?component'
import DottedBg from '@/assets/svg/dotted_background.svg?component'
import Plus from '@/assets/svg/plus.svg?component'
import Zigzag from '@/assets/svg/zigzag.svg?component'
import SquareDots from '@/assets/svg/square-dots.svg?component'
</script>

<style scoped lang="scss"></style>
