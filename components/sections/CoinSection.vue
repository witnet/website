<template>
  <div class="section grid grid-cols-[repeat(3,1fr)] items-center py-xl">
      <PalmBlueIcon class="col-start-1 col-span-1 palm"/>
      <div class="col-start-2 col-span-2 flex items-center">
        <h2 class="title-h1">{{ $t('coin.title') }}</h2>
        <p class="mx-xl line"></p>
        <div>
          <h4 class="title-h4">{{ $t('coin.description1') }}</h4>
          <p class="text">{{ $t('coin.description2') }}</p>
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
import PalmBlueIcon from '@/assets/svg/palmBlue.svg?component'
</script>

<style scoped>
.palm {
  /* position: ; */
}

.section {
  background-color: black;
  color: white;
}

.line {
  border: 2px solid #00E2ED;
  height: 80px;
}
</style>
