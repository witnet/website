<template>
  <div class="section grid grid-cols-[repeat(3,1fr)] items-center py-xl">
      <PalmBlueIcon class="col-start-1 col-span-1 palm"/>
      <div class="col-start-2 col-span-2 flex items-center">

        <i18n-t keypath="coin.title.main" class="title-h1 text-white-50" tag="h3">
          <span class="text-wit-blue-500">{{ $t('coin.title.mark') }}</span>
        </i18n-t>

        <p class="mx-xl line"></p>
        <div class="max-w-md">
          <h4 class="title-h3 text-white-50 mb-md">{{ $t('coin.description1') }}</h4>
          <p class="text text-white-50">{{ $t('coin.description2') }}</p>
        </div>
    </div>
    <!-- <div>
      <CustomButton :type="ButtonType.primary">Stake</CustomButton>
      <CustomButton :type="ButtonType.secondary">Buy</CustomButton>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import PalmBlueIcon from '@/assets/svg/palmBlue.svg?component'
</script>

<style scoped lang="scss">
.palm {
  /* position: ; */
}

.section {
  background-color: black;
  color: white;
}

.line {
  border: 2px solid $blue;
  height: 150px;
}

</style>
