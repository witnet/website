<template lang="pug">
  footer
    article.wrapped
      div.menu
        ul.social
          li
            a(href="mailto:info@witnet.foundation?subject=Witnet project", target="_blank")
              img(src="/static/img/social/email.svg", alt="Email")
          li
            a(href="//reddit.com/r/witnet", target="_blank")
              img(src="/static/img/social/reddit.svg", alt="Reddit")
          li
            a(href="//gitter.im/witnet/witnet", target="_blank")
              img(src="/static/img/social/gitter.svg", alt="Gitter")
          li
            a(href="//t.me/witnetio", target="_blank")
              img(src="/static/img/social/telegram.svg", alt="Gitter")
          li
            a(href="//github.com/witnet", target="_blank")
              img(src="/static/img/social/github.svg", alt="GitHub")
          li
            a(href="//medium.com/witnet", target="_blank")
              img(src="/static/img/social/medium.svg", alt="Medium")
          li
            a(href="//twitter.com/witnet_io", target="_blank")
              img(src="/static/img/social/twitter.svg", alt="Twitter")
        ul.links
          li
            router-link(to='/') Home page
          li
            router-link(to='faq') Frequently Asked Questions
          li
            router-link(to='contact') Contact channels
          li
            a(href="//medium.com/witnet") Official blog
      h1
        img(src='/static/img/logo-white.png')
      p.copy
        small
          em Witnet is a decentralized oracle network that connects smart contracts to the outer world. It aims to allow any piece of software to retrieve the contents published at any web address with complete and verifiable proof of its integrity and without blindly trusting any third party.
      p.copy © 2018 Witnet Foundation. Some rights reserved.
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class FooterComponent extends Vue {}
</script>

<style scoped lang="stylus">
  footer
    padding 70px 20px
    background #222834
    font-family "Titillium Web", sans-serif
    *
      color #DDD
    p.copy
      max-width 420px
    .menu
      float right
      margin-left 30px
      ul.links
        margin-bottom 50px
        padding-top 15px
        list-style-type none
        li
          text-align right
          a
            display block
            padding 5px 20px
            text-decoration none
            opacity .7
            transition opacity .1s ease
            &:hover
              opacity 1
      ul.social
        padding 0 10px 20px 10px
        list-style-type none
        overflow auto
        border-bottom 1px solid rgba(255, 255, 255, .1)
        li
          float right
          a
            padding 10px
            opacity .5
            transition opacity .1s ease
            &:hover
              opacity 1
            img
              height 28px
</style>