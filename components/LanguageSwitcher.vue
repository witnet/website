<template>
  <WSelect v-model="selectedOption" :options="languageOptions"  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { WSelect } from 'wit-vue-ui'
import { LocaleCodes } from '@/types'
const { setLocale } = useI18n()
const selectedOption = ref({
  key: LocaleCodes.en,
  label: "English",
  icon: null
})
watch(selectedOption, (value) => {
  setLocale(value.key)
})
const languageOptions = [
  {
    key: LocaleCodes.en,
    label: "English",
    icon: null
  },
  // {
  //   key: LocaleCodes.es,
  //   label: "Español",
  //   icon: null
  // }
];
</script>