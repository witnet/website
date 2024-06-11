<template>
  <div class="border-2 border-black-950 rounded-lg px-xl py-md m-sm">
    <div class="flex items-center">
      <div class="circle border border-black-950 rounded-full h-fit p-sm mr-md">{{ formattedIndex }}</div>
      <h3 class="title-h4">{{ title }}</h3>
    </div>
    <hr class="hr my-md">
    <p class="text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const formattedIndex = computed(() => {
return props.index.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
})
</script>

<style scoped lang="scss">
.title-h2 {
  font-weight: bold;
}

.hr {
  height: 4px;
  background-color: black;  /* Modern Browsers */
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