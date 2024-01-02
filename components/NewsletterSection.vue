<template>
  <div>
    <h2>{{ $t('newsletter.title') }}</h2>
    <h2>{{ $t('newsletter.subtitle') }}</h2>
    <a :href="URLS.newsletter">{{ $t('newsletter.action') }}</a>
  </div>
</template>
<script setup lang="ts">
import { URLS } from '@/constants'
</script>
