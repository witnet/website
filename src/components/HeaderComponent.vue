<template lang="pug">
  header
    div.wrapped
      h1
        router-link(to='/')
          img(src='static/img/logo.png', alt='Witnet')
      menu
        ul
          li
            router-link(to='faq') FAQ
          li
            a(href='') Contact
          li
            a(href='//medium.com/witnet', target='_blank') Blog
          li
            a.buttonLike(href='/static/whitepaper.pdf', target='blank') Read the whitepaper
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
    font-family Montserrat, sans-serif
  h1
    float left
    margin 20px 0 0 10px
  menu
    float right
    position relative
    right 12px
    li
      display inline
      foat left
      a
        padding 12px 20px
        margin 10px
        font-size .8em
        text-decoration: none
        color #999
        transition color .2s ease
        &.buttonLike
          margin-left 30px
          font-size .6em
          color white
        &:hover:not(.buttonLike)
          color #444
</style>