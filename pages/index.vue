<template>
  <div class="container">
    <header class="header mb-4 flex place-content-between">
      <h2 class="text-2xl">{{ $t('title') }}</h2>
      <LangSwitcher />
    </header>
  </div>
</template>

<style lang="scss">
.container {
  padding: 2rem;
  margin: 0 auto;
  height: 100vh;
  color: $white;

  .header {
    max-width: 1440px;
  }
}
</style>
