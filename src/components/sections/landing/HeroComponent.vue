<template lang="pug">
  article.hero
    div.wrapped
      div.video
        video
        a.play Watch video
      h2 Connecting smart contracts to the real world.
      h3 Witnet lets smart contracts be aware of anything happening outside the blockchain.
      div.buttons
        a.buttonLike Join mailing list
        a.negative.transparent.buttonLike(href='//t.me/witnetio', target='blank') Join us on Telegram
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
  font-family "Titillium Web", sans-serif
  background #222834
  border-bottom 1px solid #EEE
    margin-bottom 20px
  .wrapped
    padding 200px 20px 120px 20px
    background-image url('/static/img/hero.png')
    background-position 110% 60%
    bacground-size cover
    background-repeat no-repeat
    background-clip none
  h2
    width 600px
    max-width 100%
    color #FF
    font-weight 600
    font-size 3em
    line-height 1.2em
  h3
    margin-top 10px
    color #FF
    width 450px
    max-width 100%
    font-weight 400
    font-size 1.5em
    line-height 1.5em
    opacity .6
  .buttons
    padding-top 50px
    a
      margin-left 5px
      margin-right 5px
  .video
    float right
    position relative
    top 30px
    width 450px
    max-width 100%
    margin-left 20px
    *
      text-align center
      cursor pointer
    video
      width 100%
      background rgba(0, 0, 0, .2)
    .play
      position absolute
      left 0
      top 70%
      width 100%
      color white
      font-size .9em
      font-weight 600
      text-transform uppercase
      text-shadow 0 2px 2px #3C52F3
      opacity .8
      &:before
        content '\25B6'
        top -95px
        position absolute
        width 73px
        height 80px
        padding-left 7px
        background white
        color #3C52F3
        font-size 3em
        line-height 1.65
        border-radius 100%
        box-shadow 0 2px 2px rgba(102, 0, 255, .2)
        transition background, color .2s ease
    &:hover .play:before
      background #3C52F3
      background linear-gradient(135deg, rgba(55,125,243,1) 0%,rgba(102,0,221,1) 100%)
      color white
    &:after
      content ''
      display block
      width 100%
      height 10px
      position absolute
      bottom 5px
      left 0
      box-shadow 0 9px 10px rgba(0, 0, 0, .1)

  @media (max-width 1000px)
    .wrapped
      padding-top 100px
      div.video
        float left
        margin 0 0 60px 0
</style>