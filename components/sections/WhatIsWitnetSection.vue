<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-wit-blue-500'"
    :content-classes="'grid justify-items-center'"
  >
    <template #content>
      <div class="grid justify-items-center my-lg">
        <i18n-t
          keypath="what-is-witnet.title.main"
          class="title-h2 font-normal text-center max-w-screen-md"
          tag="h2"
        >
          <span class="title-h2">
            <br />{{ $t('what-is-witnet.title.witnet') }}
          </span>
        </i18n-t>

        <h3 class="title-h3 font-normal text-center max-w-screen-md">
          {{ $t('what-is-witnet.subtitle') }}
        </h3>

        <DashesIcon class="m-xl dashes" />

        <p class="text text-center max-w-screen-md">
          {{ $t('what-is-witnet.description') }}
        </p>
      </div>
      <div
        class="grid grid-cols-6 justify-center relative w-min-content gap-sm w-max my-lg"
      >
        <CircleIcon class="w-2xl h-auto sm:w-xl absolute z-0 left-[-40px] top-[16px]" />
        <BashIcon class="w-2xl h-auto sm:w-xl z-10" />
        <StorageIcon class="w-2xl h-auto sm:w-xl z-10" />
        <SlashIcon class="w-2xl h-auto sm:w-xl z-10" />
        <LockIcon class="w-2xl h-auto sm:w-xl z-10" />
        <BulbIcon class="w-2xl h-auto sm:w-xl z-10" />
        <KeyIcon class="w-2xl h-auto sm:w-xl z-10" />
        <CircleIcon class="w-2xl h-auto sm:w-xl absolute z-0 right-[-40px] bottom-[16px]" />
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
