<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-black-950'"
    :content-classes="'grid justify-items-center gap-lg'"
  >
    <template #content>
      <i18n-t
        keypath="community.title.text"
        class="title-h2 text-white-50"
        tag="h2"
        scope="global"
      >
        <span class="text-wit-blue-500">{{ $t('community.title.dot') }}</span>
      </i18n-t>
      <p class="text text-center text-white-50">
        {{ t('community.description') }}
      </p>
      <div class="grid grid-cols-2 gap-3xl mt-lg sm:grid-cols-1">
        <IconWithText
          :text-color="'text-link-dark'"
          class="w-72 mb-4 sm:mb-0 cursor-pointer"
          :text="$t('community.advocate-program')"
          :link="URLS.advocateProgram"
        >
          <MegaphoneIcon class="icon" />
        </IconWithText>
        <IconWithText
          :text-color="'text-link-dark'"
          class="w-72 cursor-pointer"
          :text="$t('community.grant-program')"
          :link="URLS.grantProgram"
        >
          <BadgeIcon class="icon" />
        </IconWithText>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import MegaphoneIcon from '@/assets/svg/megaphone.svg?component'
import BadgeIcon from '@/assets/svg/badge.svg?component'
import { URLS } from '@/constants'

const { t } = useI18n()
</script>

<style scoped>
.icon {
  width: 45px;
  height: 45px;
}
</style>
