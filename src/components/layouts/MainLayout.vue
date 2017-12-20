<template lang="pug">
  main
    headerComponent
    router-view
    footerComponent
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {FooterComponent, HeaderComponent} from '../index'

  @Component({
    components: {
      headerComponent: HeaderComponent,
      footerComponent: FooterComponent
    }
  })
  export default class MainLayout extends Vue {

  }
</script>

<style lang="stylus">
  body
    font-family Merriweather, serif
    margin 0
    *
      box-sizing border-box
    h1, h2, h3, h4, h5, h6
      font-family Montserrat, sans-serif
      margin 0
    p
      color #444
      font-size .9em
      line-height 1.8em

  .wrapped
    max-width 1000px
    margin 0 auto
    padding 0 10px
  a.buttonLike
    padding 12px 20px
    border-radius 4px
    background #60f
    color white
    border 2px solid transparent
    font-family Montserrat, sans-serif
    font-size .7em
    font-weight 500
    letter-spacing .15em
    text-transform uppercase
    text-decoration none
    transition color, background .2s ease
    cursor pointer
    &.negative, &:not(.negative):hover
      background white
      color #60f
      border-color #60f
    &.negative:hover
      background #60f
      color white
      border-color transparent
    &.transparent
      background transparent
</style>