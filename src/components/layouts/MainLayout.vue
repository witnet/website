<template lang="pug">
  main
    headerComponent
    section.main
      router-view
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import {HeaderComponent} from '../index'

  @Component({
    components: {
      headerComponent: HeaderComponent
    }
  })
  export default class MainLayout extends Vue {

  }
</script>

<style lang="stylus">
  html body
    font-family Merriweather, serif
  h1, h2, h3, h4, h5, h6
    margin 0

  .wrapped
    max-width 1000px
    margin 0 auto
  a.buttonLike
    padding 14px 24px
    border-radius 4px
    background #60f
    color white
    border 2px solid transparent
    font-family Montserrat, sans-serif
    font-size .8em
    font-weight 500
    letter-spacing .15em
    text-transform uppercase
    text-decoration none
    transition color, background .2s ease
    cursor pointer
    &.negative, &:not(.negative):hover
      background white
      color #60f
      border 2px solid #60f
    &.negative:hover
      background #60f
      color white
      border 2px solid transparent
    &.transparent
      background transparent
</style>