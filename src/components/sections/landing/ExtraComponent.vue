<template lang="pug">
  article.extra.wrapped
    ul
      li.team
        figure
          img(src="//uploads.republic.co/p/images/attachments/original/000/004/791/4791-1517306031-30a31ed16ebc11086dc0f06394864ad8e0902bfb.png")
        main
          h4 Brought to you by an unstoppable team of makers
          p Witnet is an open source project originally devised by #[a(href="//stampery.com") Stampery], the leaders of blockchain-powered data certification. The protocol is now being developed by #[i Witnet Foundation] in collaboration with a community of independent contributors.
          p Ever since Stampery was founded in 2014, they have been on a mission: replacing blind trust with mathematical proof. Witnet is the next step towards this goal.
          p Stampery is backed by top venture capital funds and angel investors, including #[a(href="//en.wikipedia.org/wiki/Tim_Draper") Tim Draper] and #[a(href="http://blockchain.capital/portfolio/") Blockchain Capital].
          p The Stampery team has also been involved in the development of #[a(href="//aragon.one") Aragon], #[a(href="//trailbot.io") Trailbot], #[a(href="//mongoaud.it") Mongoaudit] and #[a(href="//loqui.im") Loqui IM].
      li.ark
        figure
          img(src="/static/img/illustrations/ark.svg")
        main
          h4 The door to a world where history is no longer written by the victors
          p Witnet will enable the creation of "Digital Knowledge Arks": decentralized, immutable, censorship-resistant and eternal archives of humanity's most relevant digital data.
          p A series of truth vaults aimed to ensure that knowledge and truth remains democratic and verifiable forever.
          p
            a(href="//medium.com/witnet/tagged/digital-knowledge-arks" target="_blank").ark.buttonLike.compact.special Learn more
            small about Digital Knowledge Arks.
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class ExtraComponent extends Vue {

  }
</script>

<style scoped lang="stylus">
  article.extra
    margin-top 90px
    h3
      font-size 1.7em
      font-weight 500
      color #33
      text-align center
      &:after
        content ''
        display block
        margin 15px auto 0 auto
        width 70%
        height 2px
        background linear-gradient(90deg, rgba(55,125,243,0) 0%, rgba(20,25,133,1) 50%, rgba(102,0,221,0) 100%)
    > ul
      padding 0 20px
      > li
        margin 40px 0 90px 0
        min-height 200px
        list-style-type none
        overflow auto
        &:not(:last-child)
          padding-bottom 60px
          border-bottom 1px solid #EE
        figure
          float left
          margin 0
          width 50%
          text-align center
          img
            margin 0 auto
            max-width 100%
        main
          float right
          width 50%
          max-width 100%
          h4
            margin-bottom 25px
            font-size 1.4em
            font-weight 500
            color #33
            &:after
              content ''
              display block
              margin-top 10px
              width 100px
              height 2px
              background linear-gradient(90deg, rgb(55,125,243) 0%, rgb(20,25,133) 50%, rgb(102,0,221) 100%)
          p
            font-size 1.2em
        &:nth-child(2n+1)
          figure
            float right
          main
            float left
    .team figure img
      margin-top 60px

.ark.buttonLike
  margin-top 10px
  margin-right 10px

@media (max-width 1000px)
  ul li figure,
  ul li main
    float none
    width 100%
  ul li figure
    margin 0 0 30px 0
</style>