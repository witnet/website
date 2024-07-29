<template>
  <div
    class="h-full w-auto out-of-boundaries card border-2 border-black-950 bg-white-50 rounded-lg px-xl py-xl max-w-sm"
  >
    <RoundedIcon class="rounded-icon">
      <slot name="icon"></slot>
    </RoundedIcon>
    <div class="ml-xl px-sm">
      <h3 class="text-2xl text-black-950 font-semibold leading-4 pl-14">
        {{ title }}
      </h3>
      <hr class="hr my-md ml-14" />
    </div>
    <p class="text text-black-950 mb-md">
      {{ description }}
    </p>

    <SlashesIcon class="slashes w-[68px] sm:hidden"></SlashesIcon>
    <a :href="url" target="_blank">
      <ArrowButton class="action">{{ action }}</ArrowButton>
    </a>
  </div>
</template>

<script setup lang="ts">
import SlashesIcon from '@/assets/svg/slashes.svg?component'
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
:slotted(svg) {
  width: 60px;
  height: 60px;
}

.out-of-boundaries {
  // add margin equal to out of boundaries
  margin: 15px 30px 25px 15px;
}

.rounded-icon {
  position: absolute;
  top: -15px;
  left: -15px;
}

.action {
  position: absolute;
  right: -30px;
  bottom: 16px;
}

.slashes {
  position: absolute;
  bottom: 32px;
}

.card {
  box-shadow: 7px 10px 0px rgb(0, 0, 0);
  position: relative;
}

.title-h2 {
  font-weight: bold;
}

.hr {
  height: 3px;
  background-color: black; /* Modern Browsers */
}

.circle {
  line-height: 1;
  font-size: 24px;
  height: 48px;
  min-width: 48px;
  align-content: center;
  text-align: center;
  background-color: $blue;
}
</style>
