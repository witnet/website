<template>
  <!-- extra div to be able to style margins from parent without collision with inner styles -->
  <div>
    <div
      class="card border rounded-lg px-xl py-xl mr-sm mb-sm max-w-md h-full"
      :class="['shadow-' + shadowColor]"
    >
      <div class="flex justify-between items-center">
        <h3 class="text-xl text-black-950 font-semibold leading-4">
          {{ title }}
        </h3>
        <ArrowRightIcon class="arrow" />
      </div>
      <hr class="hr my-md" />
      <slot name="description" class="text-sm text-black-950"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/assets/svg/arrow_right.svg?component'

defineProps({
  title: {
    type: String,
    required: true,
  },
  shadowColor: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.card {
  background: white;
}

.shadow-black {
  box-shadow: 7px 10px 0px #232323;
}

.shadow-blue {
  box-shadow: 7px 10px 0px #00e2ed;
}

.title-h2 {
  font-weight: bold;
}

/* TODO */
.border {
  border: 1px solid black;
}

/* TODO */
.rounded-lg {
  border-radius: 1rem;
}
.hr {
  height: 3px;
  background-color: black; /* Modern Browsers */
}

.arrow {
  height: 14px;
}
</style>
