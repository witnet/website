<template>
  <div class="border-black-950 rounded-lg px-xl py-md m-sm">
    <h3 class="title-h2">{{ title }}</h3>
    <hr class="hr my-md">
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
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
.title-h2 {
  font-weight: bold;
}


/* TODO */
.rounded-lg {
  border-radius: 1rem;
}
.hr {
  height: 4px;
  background-color: black;  /* Modern Browsers */

}
</style>