<template lang="pug">
  article.intrigued
    aside.wrapped
      span Intrigued?
      div.buttons
        a.buttonLike(href='//arxiv.org/pdf/1711.09756.pdf', target='blank') Read the whitepaper
        a.buttonLike Join mailing list
        a.negative.buttonLike(href='//t.me/witnetio', target='blank') Join us on Telegram
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class IntriguedComponent extends Vue {

  }
</script>

<style scoped lang="stylus">
    article.intrigued
      margin 0
      background #222834
      aside.wrapped
        padding 60px 30px 28px 30px
        overflow auto
        span
          float left
          margin-bottom 30px
          font-family "Titillium Web", sans-serif
          font-size 1.5em
          font-weight 500
          color #FF
        div.buttons
          float right
          a
            margin-left 10px
</style>