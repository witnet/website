<template>
  <div class="hero-container flex flex-col items-center">
    <!-- <SocialLinks class="fixed"/> -->

    <h1 class="title-h1 text-center">{{ $t('hero.title') }}</h1>

    <h2 class="title-h2 text-center">{{ $t('hero.description') }}</h2>

    <CustomButton :type="ButtonType.primary">
      {{ $t('hero.action') }}
    </CustomButton>
  </div>
</template>

<script setup>
import { ButtonType } from '@/types'
</script>

<style scoped>
.title-h1 {
  max-width: 600px;
  margin-bottom: 32px;
}

.title-h2 {
  max-width: 550px;
  margin-bottom: 48px;
}
</style>