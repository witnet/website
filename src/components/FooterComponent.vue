<template lang="pug">
  footer
    article.wrapped
      h1
        img(src='/static/img/logo-white.png').desaturated
      p © 2018 Stampery, Inc. Some rights reserved.
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class FooterComponent extends Vue {}
</script>

<style scoped lang="stylus">
  footer
    padding 70px
    background #222
    font-family Montserrat, sans-serif
    *
      color #DDD
</style>