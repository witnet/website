<template>
  <div>
    <h2 class="title-h2">{{ $t('community.title') }}</h2>
    <p>{{ $t('community.description') }}</p>
    <a :href="URLS.advocateProgram">{{ $t('community.advocate-program') }}</a>
    <a :href="URLS.grantProgram">{{ $t('community.grant-program') }}</a>
  </div>
</template>

<script setup lang="ts">
import { URLS } from '@/constants'
</script>
