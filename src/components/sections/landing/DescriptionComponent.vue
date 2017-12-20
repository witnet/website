<template lang="pug">
  article.description.wrapped
    h3 Meet Witnet, the first Decentralized Oracle Network
    ul
      li
        figure
        main
          h4 A realistic solution to the oracle problem
          p The Witnet protocol is a Decentralized Oracle Network built on a blockchain with a native token called Wit.
          p This network is made of automated oracle nodes called "witnesses" that use a headless browser to retrieve and attest web contents automatically upon request.
      li
        figure
        main
          h4 Smart contracts with real power
          p Witnet allows you to create smart contracts whose outcome depends on any piece of data that can be found online today or will be published in the future.
          p You can freely choose how many witnesses will resolve your contracts. You can employ many witnesses and get the best certainty or use only a few to get a better price!
      li
        figure
        main
          h4 Minable native token
          p Witnesses are also in charge of validating transactions in the network and bundling them into blocks that get appended to the blockchain.
          p In doing so, they collect transaction fees and block rewards.
      li
        figure
        main
          h4 Decentralized and fair by default
          p The probability for every miner to be assigned new tasks or mine new blocks is directly proportional to their past performance in terms of honesty: their reputation.
          p The Witnet protocol makes mining viable even on commodity hardware, thus guaranteeing fairness.
      li
        figure
        main
          h4 100% truth, 100% trust
          p Witnet claims are trustworthy not because of authority but because they come from anonymous witnesses who are incentivized to be honest and compete against each other for rewards.

    aside.intrigued
      span Intrigued?
      div.buttons
        a.buttonLike Read the whitepaper
        a.buttonLike Join mailing list
        a.negative.buttonLike(href='//t.me/joinwitnet') Join us on Telegram
</template>

<script lang="ts">
  export default {
    name: "descriptioncomponent"
  }
</script>

<style scoped lang="stylus">
  article.description
    padding-top 70px
    padding-bottom 50px
    h3
      font-size 1.4em
      font-weight 600
      color #60F
      text-align center
    > ul
      padding 0 20px
      > li
        margin 40px 0
        min-height 200px
        list-style-type none
        overflow auto
        main
          float right
          width 420px
          max-width 100%
          h4
            margin-bottom 20px
            font-size 1.2em
            font-weight 500
            color #60F
        &:nth-child(2n)
          main
            float left
    aside.intrigued
      height 90px
      margin 0 20px
      padding 30px
      border 2px solid #60F
      border-radius 4px
      span
        float left
        font-family Montserrat, sans-serif
        font-size 1.2em
        font-weight 500
        color #60F
      div.buttons
        float right
        a
          margin-left 10px
</style>