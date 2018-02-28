<template lang="pug">
  article.hero
    div#particles
    div.wrapped
      div.video(v-bind:class="{uncovered: uncovered}")
        iframe(ref="youtube", src="https://www.youtube-nocookie.com/embed/wEtOiStvQoU?rel=0&showinfo=0&enablejsapi=1&vq=highres" frameborder="0" allow="encrypted-media" allowfullscreen)
        img.cover(@click="uncover", src="/static/img/poster.png")
      h2 Create smart contracts #[br]with real power.
      h3 Witnet connects smart contracts to any external data source.
      div.buttons
        a.buttonLike(href='/static/witnet-whitepaper.pdf', target='blank') Read the whitepaper
        router-link.negative.transparent.buttonLike(to="community") Join the community
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import 'particles.js'

  class ytMessage {
    event: string = 'command'
    func: string
    args: Array = []

    constructor(func, args?) {
      this.func = func
      if (args)
        this.args = args
    }

    serialize() {
      return JSON.stringify({
        event: this.event,
        func: this.func,
        args: this.args
      })
    }
  }

  @Component({})
  export default class HeroComponent extends Vue {

    uncovered: boolean = false

    mounted () {
      window.particlesJS.load('particles', 'static/particles.json')
    }

    uncover(e: MouseEvent): void {
      this.uncovered = true
      const msg: string = new ytMessage('playVideo').serialize()
      this.$refs.youtube.contentWindow.postMessage(msg, '*')
      setTimeout(() => {
        this.$refs.youtube.contentWindow.postMessage(msg, '*')
      }, 1000, this)
    }

  }
</script>

<style scoped lang="stylus">
article.hero
  position relative
  font-family "Titillium Web", sans-serif
  background #222834
  border-bottom 1px solid #EEE
  #particles
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    z-index 0
  .wrapped
    position relative
    padding 150px 20px 100px 20px
    z-index 1
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
      margin-right 10px
  .video
    float right
    position relative
    width 550px
    height 310px
    max-width 100%
    margin-left 20px
    background rgba(0, 0, 0, .2)
    transform perspective(600px) rotateY(-15deg)
    opacity .9
    transition all .5s ease
    &:hover
      opacity 1
      transform scale(1.01) perspective(600px) rotateY(-15deg)
    &.uncovered
      transform rotateY(0)
      .cover
        display none
    iframe
      width 100%
      height 100%
    .cover
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      width 100%
      height 100%
      cursor pointer

  @media (max-width 1200px)
    .video
      width 450px
      height 253px

  @media (max-width 1000px)
    .wrapped
      padding-top 80px
      margin 0 auto
      width 600px
      max-width 100%
      .video
        float none
        top 20px
        margin 0 0 60px 0
        transform rotateY(0)
</style>