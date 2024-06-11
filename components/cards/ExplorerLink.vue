<template>
  <div class="card border rounded-lg px-xl py-md m-sm">
    <div class="flex justify-between items-center">
      <h3 class="title-h4">{{ title }}</h3>
      <ArrowRightIcon class="arrow"/>
    </div>
    <hr class="hr my-md">
    <p class="text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/assets/svg/arrow_right.svg?component'
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.card {
  background: white;
  box-shadow: 7px 10px 0px rgb(0, 0, 0);
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
  background-color: black;  /* Modern Browsers */
}

.arrow {
  height: 14px;
}
</style>