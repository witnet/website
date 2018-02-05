<template lang="pug">
  article.description.wrapped
    ul
      li.problem
        figure
          img(src="/static/img/illustrations/problem.svg")
        main
          h4 The oracle problem
          p Blockchain technology promises to revolutionize business by creating smart contracts that, unlike paper contracts, are impossible to breach. However, up until now, smart contracts are completely isolated from the rest of the Internet.
          p This is called "the oracle problem".
      li.solution
        figure
          img(src="/static/img/illustrations/solution.svg")
        main
          h4 The solution: a Decentralized Oracle Network
          p The Witnet protocol gives smart contracts real power by connecting them to any data source available online. Sport results, stock prices, weather forecasts or even other blockchains.
          p Witnet works thanks to a distributed network of mining nodes—called witnesses—who earn Wit tokens as a reward for retrieving web data and reporting it directly to the smart contracts.
      li.wit
        figure
          img(src="/static/img/illustrations/wit.svg")
        main
          h4 Wit: a minable native token
          p Witnesses are also in charge of validating transactions in the network and bundling them into blocks that get appended to the blockchain periodically.
          p In doing so, they collect transaction fees and block rewards.
      li.fair
        figure
          img(src="/static/img/illustrations/fair.svg")
        main
          h4 Decentralized and fair by default
          p The probability for every witness to be assigned tasks or mine new blocks is directly proportional to their past performance in terms of honesty: their reputation.
          p The Witnet protocol is designed to make Wit mining viable even on commodity hardware, thus guaranteeing fairness and decentralization.
      li.truth
        figure
          img(src="/static/img/illustrations/truth.svg")
        main
          h4 100% truth, 100% trust
          p Data provided by Witnet is reliable not because of authority but because it comes from anonymous witnesses who are incentivized to remain honest and to compete each other for rewards.
          p In addition, veracity of this data is guaranteed by a consensus algorithm that detects fraudsters, who are immediately punished.
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  @Component({})
  export default class DescriptionComponent extends Vue {

  }
</script>

<style scoped lang="stylus">
  article.description
    padding-top 70px
    padding-bottom 50px
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
        &:nth-child(2n)
          figure
            float right
          main
            float left
    .solution figure img
      margin-top 30px
      height 250px
    @media (max-width 1000px)
      ul li figure,
      ul li main
        float none
        width 100%
      ul li figure
        margin 0 0 30px 0
    aside.intrigued
      margin 0 20p2
      padding 30px 30px 8px 30px
      border 2px solid #60D
      border-radius 4px
      overflow auto
      span
        float left
        margin-bottom 18px
        font-family "Titillium Web", sans-serif
        font-size 1.2em
        font-weight 500
        color #60D
      div.buttons
        float right
        a
          margin-left 10px
</style>