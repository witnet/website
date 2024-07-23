<template>
  <NuxtLayout
    id="WhatIsWitnet"
    name="section"
    :frame-classes="'bg-wit-blue-500'"
    :content-classes="'grid justify-items-center'"
  >
    <template #content>
      <div class="grid justify-items-center mb-lg">
        <i18n-t
          keypath="what-is-witnet.title.main"
          class="title-h2-light text-center max-w-screen-md"
          tag="h2"
          scope="global"
        >
          <span class="title-h2">
            <br />{{ $t('what-is-witnet.title.witnet') }}
          </span>
        </i18n-t>

        <i18n-t
          keypath="what-is-witnet.subtitle"
          class="title-h3 font-normal text-center max-w-screen-md"
          tag="h2"
          scope="global"
        >
          <span class="title-h3 font-normal text-center max-w-screen-md">
            <br />{{ $t('what-is-witnet.subtitle2') }}
          </span>
        </i18n-t>

        <DashesIcon class="m-xl dashes w-2xl" />

        <p class="text text-center max-w-screen-md">
          {{ $t('what-is-witnet.description') }}
        </p>
      </div>
      <div
        class="grid grid-cols-6 justify-center relative w-min-content gap-sm w-max mt-lg"
      >
        <CircleIcon
          class="w-[70px] h-auto sm:w-xl absolute z-0 left-[-40px] top-[16px]"
        />
        <BashIcon class="w-[70px] h-auto sm:w-xl z-10" />
        <StorageIcon class="w-[70px] h-auto sm:w-xl z-10" />
        <SlashIcon class="w-[70px] h-auto sm:w-xl z-10" />
        <LockIcon class="w-[70px] h-auto sm:w-xl z-10" />
        <BulbIcon class="w-[70px] h-auto sm:w-xl z-10" />
        <KeyIcon class="w-[70px] h-auto sm:w-xl z-10" />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import BashIcon from '@/assets/svg/bash.svg?component'
import StorageIcon from '@/assets/svg/storage.svg?component'
import SlashIcon from '@/assets/svg/slash.svg?component'
import LockIcon from '@/assets/svg/lock.svg?component'
import BulbIcon from '@/assets/svg/bulb.svg?component'
import KeyIcon from '@/assets/svg/key.svg?component'
import CircleIcon from '@/assets/svg/circle.svg?component'
import DashesIcon from '@/assets/svg/dashes.svg?component'
</script>

<style scoped lang="scss">
.icon {
  z-index: 2;
}

.left-circle {
  position: relative;
  z-index: 1;
}
</style>
