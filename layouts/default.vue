<template>
  <div class="main-container">
    <NavBar />
    <div class="container">
      <slot></slot>
    </div>
    <FooterSection />
  </div>
</template>

<style lang="scss">
.main-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  align-items: center;
  padding: 24px;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 64px;
}
</style>
