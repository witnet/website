<template>
  <div
    class="border-2 border-black-950 rounded-lg px-lg py-lg m-sm w-72 shadow-black-950 shadow-[7px_10px_0px]"
  >
    <h3 class="title-h5">{{ title }}</h3>

    <hr class="hr my-md" />

    <ul class="marker:text-wit-blue-500 grid gap-md">
      <li
        v-for="tutorial in tutorials"
        :key="tutorial.name"
        class="list-disc list-inside"
      >
        <TutorialLink
          :key="tutorial.name"
          class="block"
          :name="tutorial.name"
          :url="tutorial.url"
        />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { TutorialLink } from '~/types'

defineProps({
  title: {
    type: String,
    required: true,
  },
  tutorials: {
    type: Array as PropType<TutorialLink[]>,
    required: true,
  },
})
</script>

<style>
.title-h2 {
  font-weight: bold;
}

/* TODO */
.rounded-lg {
  border-radius: 1rem;
}
.hr {
  height: 3px;
  background-color: black; /* Modern Browsers */
}
</style>
