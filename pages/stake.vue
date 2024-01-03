<template>
  <div>
    <h2>{{ $t('stake-page.title') }}</h2>
    <p>{{ $t('stake-page.description') }}</p>
    <CustomButton>{{ $t('stake-page.action') }}</CustomButton>
    <p>{{ $t('stake-page.action-description') }}</p>
    <h4>{{ $t('stake-page.available-platforms-title') }}</h4>
    <PlatformsList />
    <a :href="URLS.stakeTutorial" target="_blank">
      <h4>{{ $t('stake-page.action-2') }}</h4>
      <p>{{ $t('stake-page.action-2-description') }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
import { URLS } from '@/constants'
</script>
