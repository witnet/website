<template>
  <WCard :type="CardType.Base">
    <template #header>
      <div class="flex items-center">
        <div
          class="font-normal text-base circle border border-black-950 rounded-full h-fit p-sm mr-md text-black-950"
        >
          {{ formattedIndex }}
        </div>
        <h3 class="title-h5">{{ title }}</h3>
      </div></template
    >
    <template #description>
      <p class="text">{{ description }}</p>
    </template>
  </WCard>
</template>

<script setup lang="ts">
import { WCard, CardType } from 'wit-vue-ui'
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
    useGrouping: false,
  })
})
</script>

<style scoped lang="scss">
.circle {
  line-height: 1;
  // font-size: 24px;
  height: 40px;
  min-width: 40px;
  align-content: center;
  text-align: center;
  background-color: $blue;
}
</style>
