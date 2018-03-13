<template lang="pug">
  main.community.wrapped
    h2 Join the Witnet community!
    ul.channels
      li
        img.back(src="/static/img/social/twitter.svg")
        a(href="//twitter.com/witnet_io", target="_blank") Witnet Foundation Twitter account >
        p Follow Witnet Foundation on Twitter to get daily updates on the progress of the project.
      li
        img.back(src="/static/img/social/medium.svg")
        a(href="//medium.com/witnet", target="_blank") Witnet Foundation official blog on Medium >
        p Follow Witnet Foundation on Medium to read different articles stating our vision and future roadmap.
      li
        img.back(src="/static/img/social/telegram.svg")
        a(href="//t.me/witnetio", target="_blank") Witnet Community on Telegram >
        p Join other members of the Witnet Community at the official Telegram group.
      li
        img.back(src="/static/img/social/reddit.svg")
        a(href="//reddit.com/r/witnet", target="_blank") Witnet Community subreddit >
        p The space for linking articles, informal discussion, kitten pictures and occasional memes.
      li
        img.back(src="/static/img/social/github.svg")
        a(href="//github.com/witnet", target="_blank") Witnet GitHub repository >
        p GitHub is where the Witnet protocol development takes place. Are you a programmer? Your contributions are more than welcome!
      li
        img.back(src="/static/img/social/gitter.svg")
        a(href="//gitter.im/witnet/community", target="_blank") Witnet Development Community at Gitter >
        p Join the official Witnet community Gitter room to discuss with the rest of the community and get direct support from the developers.
      li
        img.back(src="/static/img/social/email.svg")
        a(href="mailto:info@witnet.foundation?subject=Witnet project", target="_blank") Witnet Foundation contact email >
        p You can write us directly for any inquiry not appropriate for any of the other channels.
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {QuestionComponent} from './FAQ'

  @Component({
    components: {
      question: QuestionComponent
    }
  })
  export default class CommunitySection extends Vue {}
</script>

<style scoped lang="stylus">
  main.community
    padding 50px 20px 60px 20px
    h2
      font-size 1.5em
      font-weight 500
      color #33
      &:after
        content ''
        display block
        margin-top 10px
        width 100px
        height 2px
        background linear-gradient(90deg, rgb(55,125,243) 0%, rgb(20,25,133) 50%, rgb(102,0,221) 100%)
    ul.channels
      padding 30px 5px 0 5px
      list-style-type none
      overflow auto
      li
        position relative
        float left
        width calc(50% - 10px)
        margin-bottom 20px
        padding 35px 40px 30px 40px
        background #FF
        box-shadow 0 2px 10px rgba(20,25,133,.1)
        overflow hidden
        transition box-shadow .1s ease
        &:nth-child(2n+1)
          margin-right 20px
        a
          font-size 1.3em
          font-weight 500
          text-decoration none
          color #3C52F3
        img.back
          position absolute
          bottom -25px
          right -25px
          filter invert(100%) blur(1px)
          width 100px
          height 100px
          opacity .1
          transition transform .2s ease
        &:hover
          box-shadow 0 2px 15px rgba(20,25,133,.15)
          a
            text-decoration underline
          img.back
            transform rotate(-15deg) scale(1.1)

  @media (max-width 800px)
    main.community
      ul.channels
        li
          float none
          width 100%
          margin-right 0
</style>