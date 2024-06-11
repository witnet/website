<template>
  <div
    class="blue grid grid-cols-[repeat(2,1fr)] items-center justify-items-end"
  >
    <div
      class="col-start-1 col-span-1 flex flex-col w-full items-center grid-cols"
    >
      <h3 class="title-h3 mb-sm">{{ t('newsletter.title') }}</h3>
      <div class="flex mb-xl">
        <p class="text">{{ $t('newsletter.subtitle') }}</p>
        <DashesIcon class="col-start-2 col-span-2 dashes" />
      </div>

      <div>
        <label for="subscribe_buttom" class="sr-only">Label</label>
        <div class="flex rounded-lg shadow-sm">
          <input
            type="text"
            id="subscribe_buttom"
            name="subscribe_buttom"
            placeholder="name@domain.com"
            class="py-sm px-md block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <button
            type="button"
            class="py-sm px-md inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-black-950 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
           Subscribe 
          </button>
        </div>
      </div>
    </div>

    <PalmBlackIcon class="col-start-2 col-span-2 palm" />
  </div>
</template>

<script setup lang="ts">
import PalmBlackIcon from '@/assets/svg/palmBlack.svg?component'
import DashesIcon from '@/assets/svg/dashes.svg?component'

const { t } = useI18n()
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
