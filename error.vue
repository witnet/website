<template>
  <NuxtLayout>
    <div class="prose h-screen"></div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()
const statusCode = ref(error.value.statusCode)
onMounted(() => {
  if (statusCode.value === 404) {
    clearError({
      redirect: '/',
    })
  }
})
</script>
