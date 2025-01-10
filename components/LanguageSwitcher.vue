<template>
  <WSelect v-model="selectedOption" :options="languageOptions" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { WSelect } from 'wit-vue-ui'
import { languageLocales } from '@/constants'
const { setLocale } = useI18n()

const languageOptions = Object.values(languageLocales)
const selectedOption = ref(languageOptions[0])
watch(selectedOption, (value) => {
  setLocale(value.key)
})
</script>
