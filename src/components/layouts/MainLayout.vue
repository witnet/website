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
    background #FF
    font-family "Titillium Web Light", sans-serif
    margin 0
    *
      box-sizing border-box
    h1, h2, h3, h4, h5, h6
      font-family "Titillium Web", sans-serif
      margin 0
    p
      color #444
      font-size 1em
      line-height 1.8em

  .wrapped
    max-width 1200px
    margin 0 auto
    padding 0 10px
  a
    color #3C52F3
  a.buttonLike
    display inline-block
    padding 12px 30px
    border-radius 4px
    background #3C52F3
    color white
    border 2px solid transparent
    font-family "Titillium Web", sans-serif
    font-size 1em
    font-weight 600
    text-transform uppercase
    text-decoration none
    margin-top -8px
    margin-bottom 14px
    transition all .2s ease
    cursor pointer
    &.negative, &:hover
      background white
      color #3C52F3
      border-color #3C52F3
    &.negative:not(.transparent):hover
      background #3C52F3
      color white
      border-color transparent
    &.transparent:not(:hover)
      background transparent
      color #FF
    &.compact
      padding 8px 20px
      font-size .8em
    &.special
      position relative
      color white
      background linear-gradient(to left top, #377df3 0%, #60d 100%)
      border 2px solid rgb(255,255,255)
      transition opacity .2s ease
      opacity .9
      &:hover
        opacity 1

  @media (max-width 1200px)
    .wrapped
      max-width 1000px
</style>