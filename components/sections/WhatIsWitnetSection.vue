<template>
  <div class="section p-xl text-white flex flex-col items-center">

     <i18n-t keypath="what-is-witnet.title.main" class="title-h2 text-white text-center" tag="h2">
        <span class="black block">{{ $t('what-is-witnet.title.witnet') }}</span>
      </i18n-t>

    <DashesIcon class="m-xl dashes"/>

    <p class="text -black text-center mb-xl">{{ $t('what-is-witnet.description') }}</p>
   
    <div class="flex mt-xl">
      <CircleIcon class="left-circle"/>
      <BashIcon class="icon mr-sm"/>
      <StorageIcon class="icon mr-sm"/>
      <SlashIcon class="icon mr-sm"/>
      <LockIcon class="icon mr-sm"/>
      <BulbIcon class="icon mr-sm"/>
      <KeyIcon class="icon mr-sm"/>
      <!-- TODO: center -->
    </div>

  </div>
</template>

<script setup>
import BashIcon from '@/assets/svg/bash.svg?component'
import StorageIcon from '@/assets/svg/storage.svg?component'
import SlashIcon from '@/assets/svg/slash.svg?component'
import LockIcon from '@/assets/svg/lock.svg?component'
import BulbIcon from '@/assets/svg/bulb.svg?component'
import KeyIcon from '@/assets/svg/key.svg?component'
import CircleIcon from '@/assets/svg/circle.svg?component'
import DashesIcon from '@/assets/svg/dashes.svg?component'

</script>

<style scoped lang="scss">
.dashes {
  width: 100px;
}

.icon {
  z-index: 2;
  width: 90px;
}

.left-circle {
  width: 100px;
  height: 100px;
  position: relative;
  top: 30px;
  left: 30px;
  z-index: 1;
}

.right-circle {
  width: 100px;
  position: relative;
  bottom: 30px;
  right: 30px;
  z-index: 1;
}

.section {
  background-color: #00E2ED;
}

.text-white {
  color: white;
}

.text-black{
  color: black;
}

.title-h2 {
  max-width: 475px;
}
.text {
  max-width: 700px;
  margin-bottom: 48px;
}

.black {
  color: $black;
}
</style>
