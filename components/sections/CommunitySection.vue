<template>
  <SectionBase
    :description="t('secure-section.description')"
    background="black"
  >
    <template v-slot:title>
      <i18n-t
        keypath="community.title.text"
        class="title-h2 mb-lg text-white-50"
        tag="span"
      >
        <span class="text-wit-blue-500">{{ $t('community.title.dot') }}</span>
      </i18n-t>
    </template>

    <template v-slot:content>
      <div class="flex w-full items-center flex-col justify-between sm:flex-row">
        <IconWithText class="w-72 mb-4 sm:mb-0" :text="$t('community.advocate-program')">
          <MegaphoneIcon class="icon" />
        </IconWithText>
        <IconWithText class="w-72" :text="$t('community.grant-program')">
          <BadgeIcon class="icon" />
        </IconWithText>
      </div>
    </template>
  </SectionBase>
</template>

<script setup lang="ts">
const { t } = useI18n()

import MegaphoneIcon from '@/assets/svg/megaphone.svg?component'
import BadgeIcon from '@/assets/svg/badge.svg?component'
</script>

<style scoped>
.icon {
  width: 45px;
  height: 45px;
}
</style>
