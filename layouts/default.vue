<template>
  <div
    class="p-6 w-full grid grid-rows-[max-content_1fr_max-content] bg-black-950 text-white-50 dark:text-wit-blue-500 min-h-screen"
  >
    <NavBar />
    <client-only>
      <ThemeSwitch class="theme-switch" />
    </client-only>
    <div class="grid grid-auto mt-16">
      <slot></slot>
    </div>
    <FooterSection />
  </div>
</template>
