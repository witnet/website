<template>
  <div>
    <h2>{{ $t('coin.title') }}</h2>
    <p>{{ $t('coin.description') }}</p>
    <CustomButton :type="ButtonType.primary">Stake</CustomButton>
    <CustomButton :type="ButtonType.secondary">Buy</CustomButton>
  </div>
</template>

<script setup lang="ts">
import { ButtonType } from '@/types'
</script>
