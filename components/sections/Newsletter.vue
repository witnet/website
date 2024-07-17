<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-wit-blue-500'"
    :content-classes="'grid justify-start gap-sm'"
  >
    <template #content>
      <h2 class="title-h2">{{ t('newsletter.title') }}</h2>
      <div
        class="grid grid-cols-[max-content_1fr] gap-md justify-items-start items-center"
      >
        <p class="text text-xl">{{ $t('newsletter.subtitle') }}</p>
        <DashesIcon class="w-[80px] h-auto" />
      </div>
      <div class="mt-lg">
        <label for="subscribe_buttom" class="sr-only">Label</label>
        <div class="flex rounded-lg shadow-sm">
          <input
            id="subscribe_buttom"
            type="text"
            name="subscribe_buttom"
            placeholder="name@domain.com"
            class="rounded-l-full min-w-[300px] sm:min-w-max py-sm px-md block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <button
            type="button"
            class="rounded-r-full py-sm px-md inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-black-950 bg-black-950 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Subscribe
          </button>
        </div>
      </div>
        <!-- <Mailchimp /> -->
      <PalmBlackIcon class="col-start-2 col-span-2 palm hidden" />
    </template>
  </NuxtLayout>
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
