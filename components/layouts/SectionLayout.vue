<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionLayout',
}
</script>

<style>
.section {
  padding: 8vh 15vw;
}
@media (max-width: 1200px) {
  .section {
    padding: 10vw 10vw;
  }
}
@media (max-width: 600px) {
  .section {
    padding: 0;
  }
}
</style>
