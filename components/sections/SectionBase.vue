<template>
  <div
    class="w-full flex justify-center"
    :class="[backgroundClass, `background-${background}`]"
  >
    <div class="flex flex-col max-w-7xl">
      <div class="flex flex-col items-center">
        <h2
          v-if="headingType === 'h2'"
          class="title title-h2 text-center max-w-screen-md"
          :class="{ 'mb-md': !separator }"
        >
          <slot name="title"></slot>
        </h2>

        <h3
          v-if="headingType === 'h3'"
          class="title title-h2 text-center max-w-screen-md"
          :class="{ 'mb-md': !separator }"
        >
          <slot name="title"></slot>
        </h3>

        <DashesIcon v-if="separator" class="m-xl dashes" />

        <p class="description text mb-lg max-w-3xl text-center px-md">
          {{ description }}
        </p>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import DashesIcon from '@/assets/svg/dashes.svg?component'
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
  separator: {
    type: Boolean,
    required: false,
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
