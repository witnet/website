<template lang="pug">
  main
    aside.hiring(v-if="!bannerClose")
      button.close(@click="close")
      div.wrapped
        p Hey, we are #[b hiring]!
        a.cta.compact.buttonLike(href="//angel.co/witnet-foundation-1/jobs" target="_blank") Apply on AngelList
        img.wewantyou(src="//i.imgur.com/o5JYlZ2.png")
    header
      div.wrapped
        h1
          router-link(to="/")
            img(src='static/img/logo.svg', alt='Witnet')
        menu
          ul
            li
              router-link(to="faq") FAQ
            li
              router-link(to="team") Team
            li
              router-link(to="community") Community
            li
              a.negative.buttonLike.paper(href='/static/witnet-whitepaper.pdf', target='blank') Read the whitepaper
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class HeaderComponent extends Vue {

    bannerClose = false

    close (): void {
      this.bannerClose = true
    }

  }
</script>

<style scoped lang="stylus">
  header
    height 90px
    background #FF
    font-family "Titillium Web", sans-serif
  h1
    float left
    a
      display block
      padding 25px 10px 12px 10px
  menu
    float right
    position relative
    right 12px
    margin 15px 0
    ul
      margin 0
      padding 0
      li
        display inline
        foat left
        a
          padding 14px 20px
          margin 10px
          font-size 1.1em
          font-weight 600
          text-decoration: none
          color #66
          transition color .2s ease
          &.buttonLike
            margin-top: 3px
            margin-left 30px
            font-size .8em
          &:hover:not(.buttonLike)
            color #22

  @media (max-width 850px)
    header
      width 100%
      height auto
      h1
        float none
        margin 0 auto
        text-align center
      menu
        display block
        float none
        margin 0 auto
        width calc(100vw - 10px)
        padding 0
        text-align center
        padding-bottom 20px
        ul li a
          padding 20px 0
        .paper
          display none
  aside.hiring
    display block
    background #CEEAFF
    button.close
      position absolute
      width 25px
      height 25px
      right 10px
      top 10px
      border none
      background url("https://www.materialui.co/materialIcons/navigation/close_black_2048x2048.png")
      background-size contain
      cursor pointer
      opacity .3
      z-index 2
    .wrapped
      position relative
      padding 10px 30px
      overflow hidden
      .cta
        position relative
        float left
        top 24px
        left 30px
      p
        position relative
        float left
        font-size 1.2em
        z-index 1
      img.wewantyou
        position absolute
        right 50px
        bottom 0
        height 100px

@media (max-width 799px)
  img.wewantyou
    display none
@media (max-width 400px)
  aside.hiring .wrapped .cta
    top 0
    left 0
</style>