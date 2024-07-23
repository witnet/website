<template>
  <div class="card border-2 border-black-950 rounded-lg px-xl py-lg">
    <div class="flex items-center">
      <div
        class="text-md circle border border-black-950 rounded-full h-fit p-sm mr-md text-black-950"
      >
        {{ formattedIndex }}
      </div>
      <h3 class="title-h5">{{ title }}</h3>
    </div>
    <hr class="hr my-md" />
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
    useGrouping: false,
  })
})
</script>

<style scoped lang="scss">
.card {
  box-shadow: 7px 10px 0px rgb(0, 0, 0);
  margin-bottom: 10px;
  margin-right: 7px;
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
  // font-size: 24px;
  height: 40px;
  min-width: 40px;
  align-content: center;
  text-align: center;
  background-color: $blue;
}
</style>
