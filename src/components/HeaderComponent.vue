<template lang="pug">
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
            a(href='//medium.com/witnet', target='_blank') Blog
          li
            router-link(to="contact") Community
          li
            a.negative.buttonLike.paper(href='/static/witnet-whitepaper.pdf', target='blank') Read the whitepaper
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class HeaderComponent extends Vue {

  }
</script>

<style scoped lang="stylus">
  header
    height 90px
    background #FF
    border-top 2px solid #222834
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
    ul
      padding 0
      li
        display inline
        foat left
        a
          padding 12px 20px
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

</style>