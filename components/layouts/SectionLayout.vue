<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style>
.section {
  padding: 8vh 15vw;
}
@media (max-width: 1200px) {
  .section {
    padding: 10vw 5vw;
  }
}
@media (max-width: 600px) {
  .section {
    padding: 10vw 10vw;
  }
}
</style>
