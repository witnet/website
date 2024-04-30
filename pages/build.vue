<template>
  <div class="grid gap-xl">
    <BuildSection />
    <div>
      <h3>{{ $t('tutorials.title') }}</h3>
      <p>{{ $t('tutorials.description') }}</p>
      <TutorialsList />
    </div>
  </div>
</template>
