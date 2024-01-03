<template>
  <div class="hero-container">
    <SocialLinks />
    <h1>{{ $t('hero.title') }}</h1>
    <p>{{ $t('hero.description') }}</p>
    <CustomButton :type="ButtonType.primary">
      {{ $t('hero.action') }}
    </CustomButton>
  </div>
</template>

<script setup>
import { ButtonType } from '@/types'
</script>
