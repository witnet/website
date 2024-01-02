<template>
  <div class="build-content">
    <BuildSection />
    <div>
      <h3>{{ $t('tutorials.title') }}</h3>
      <p>{{ $t('tutorials.description') }}</p>
      <TutorialsList />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.build-content {
  display: grid;
  grid-gap: 2rem;
}
</style>
