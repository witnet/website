<template lang="pug">
  main
    aside.republic(v-if="!bannerClose")
      button.close(@click="close")
      div.wrapped
        p You can still join the #[strong wit] token offering waitlist on Republic Crypto!
        a.cta.compact.buttonLike(href="//republic.co/witnet" target="_blank") Go to offering page
        figure.illustrations
          img.mountain(src="https://assets.republic.co/assets/homepage/header_mountain-3225f173dc2b9b52b389ad2b8be22e9a300ba96c86cf8280246cacffeaae2b23.svg")
          img.people(src="https://assets.republic.co/assets/homepage/header_people-e2994373e05da115d821f48329b5e168c61b9ad609b8451ceacc2d9c1f05a03a.svg")
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
  aside.republic
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
      padding 50px 30px
      overflow hidden
      p
        position relative
        font-size 1.2em
        z-index 1
      .cta
        position absolute
        right 340px
        bottom 52px
        z-index 1
      .illustrations
        z-index 0
        .mountain
          position absolute
          height 150px
          right 10px
          bottom 0
        .people
          position absolute
          height 50px
          right 220px
          bottom 0

  @media (max-width 1000px)
    aside.republic
      .wrapped .cta
        position relative
        right 0
        bottom 0
      .illustrations
        opacity .3
</style>