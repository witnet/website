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
        <ClientOnly>
          <MailchimpEmbed />
        </ClientOnly>
      </div>
    </template>
    <template #right>
      <div class="h-max w-auto">
        <RotateOnScroll
          section-id="newsletter"
          start-position="-=100% top"
          end-position="+=100%"
        >
          <BlackStarIcon ref="blackStar" class="sm:hidden w-[460px] h-auto" />
        </RotateOnScroll>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BlackStarIcon from '@/assets/svg/black-star.svg?component'
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
