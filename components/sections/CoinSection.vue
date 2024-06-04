<template>
  <div class="section flex flex-col items-center p-xl">
    <div class="flex items-center">
      <h2 class="title-h1">{{ $t('coin.title') }}</h2>
      <p class="m-xl">|</p>
      <div>
        <p class="title-h2">{{ $t('coin.description1') }}</p>
        <p class="title-h2">{{ $t('coin.description2') }}</p>
      </div>
    </div>
    <!-- <div>
      <CustomButton :type="ButtonType.primary">Stake</CustomButton>
      <CustomButton :type="ButtonType.secondary">Buy</CustomButton>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ButtonType } from '@/types'
</script>

<style scoped>
.section {
  background-color: black;
  color: white;
}
</style>
