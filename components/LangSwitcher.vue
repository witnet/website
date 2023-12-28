<template>
  <select v-model="languages" class="bg-black">
    <option
      v-for="item in locales"
      :key="getCode(item as Locale)"
      :value="getCode(item as Locale)"
    >
      {{ getName(item as Locale) }}
    </option>
  </select>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()
type Locale = {
  code: string
  iso: string
  name: string
  file: string
}
function getCode(item: string | Locale) {
  return typeof item === 'string' ? (item as string) : item.code
}
function getName(item: string | Locale) {
  return typeof item === 'string' ? (item as string) : item.name
}
const languages = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  },
})
</script>
