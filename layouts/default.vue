<template>
  <div>
    <Banner />
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Banner,
    NavBar,
    Footer,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html {
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 34px;
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
  }
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
  }
  overflow-x: hidden;
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  body {
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0px;
    margin: 0px;
    #MathJax_Message {
      display: none;
    }
  }
}
body {
  padding: 0px;
  margin: 0px;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
