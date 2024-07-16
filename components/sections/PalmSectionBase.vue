<template>
  <!-- TODO: Add palm icon according to prop position: 'left' | 'right' -->
  <div
    class="w-full flex justify-center"
    :class="[backgroundClass, `background-${background}`]"
  >
    <div class="flex flex-col max-w-7xl">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: false,
    default: 'white',
  },
  headingType: {
    type: String,
    required: false,
    default: 'h3',
  },
})

const backgrounds = {
  white: 'bg-white-50',
  black: 'bg-black-950',
  blue: 'bg-wit-blue-500',
}

const backgroundClass = backgrounds[props.background]
</script>

<style lang="scss">
.background-white {
  .title {
    color: black;
  }

  .description {
    color: black;
  }
}

.background-blue {
  .title {
    color: black;
  }
  .description {
    color: black;
  }
}

.background-black {
  .title {
    color: white;
  }
  .description {
    color: white;
  }
}
</style>
