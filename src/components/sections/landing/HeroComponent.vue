<template lang="pug">
  article.hero
    h2 Connecting smart contracts to the real world.
    h3 Witnet lets smart contracts be aware of anything happening outside the blockchain.
    div.buttons
      a.buttonLike Join mailing list
      a.negative.transparent.buttonLike(href='//t.me/joinwitnet') Join us on Telegram
    div.video
      video
      a.play Watch video
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class HeroComponent extends Vue {

  }
</script>

<style scoped lang="stylus">
article.hero
  text-align center
  font-family Montserrat, sans-serif
  padding 50px 20px
  background-image url('/static/img/hero.png'),
  linear-gradient(to bottom, rgba(102,0,255,0) 0%,rgba(102,0,255,0.03) 100%)
  background-position bottom
  background-repeat no-repeat
  border-bottom 1px solid #EEE
  > *
    margin 0 auto
  h2
    color #60f
    font-weight 600
    font-size 2em
  h3
    margin-top 10px
    color #666
    width 450px
    max-width 100%
    font-weight 400
    font-size 1.2em
    line-height 1.5em
  .buttons
    padding 40px 0 50px 0
    a
      margin 0 10px
  .video
    position relative
    width 420px
    max-width 100%
    cursor pointer
    video
      width 100%
      background #CCC
    .play
      position absolute
      left 0
      top 70%
      width 100%
      color white
      font-size .7em
      font-weight 600
      text-transform uppercase
      text-shadow 0 2px 2px rgba(102, 0, 255, .2)
      opacity .8
      &:before
        content '\25B6'
        top -95px
        position absolute
        width 80px
        height 80px
        background white
        color #60F
        font-size 6.5em
        line-height 1
        border-radius 100%
        box-shadow 0 2px 2px rgba(102, 0, 255, .2)
        transition background, color .2s ease
    &:hover .play:before
      background #60F
      color white
    &:after
      content ''
      display block
      width 100%
      height 10px
      position absolute
      bottom 5px
      left 0
      box-shadow 0 9px 10px rgba(102, 0, 255, .1)
</style>