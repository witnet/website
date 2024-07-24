<template>
  <NuxtLayout
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
      <PalmBlackIcon class="sm:hidden w-[250px] h-auto rotate-180" />
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
