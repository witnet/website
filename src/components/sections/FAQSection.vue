<template lang="pug">
  main.faq.wrapped
    h2 Frequently Asked Questions
    ol.questions
      question
        h3(slot="question") Where can I read the Witnet whitepaper?
        main(slot="answer")
          p The Witnet protocol whitepaper is #[a(href="//arxiv.org/pdf/1711.09756.pdf") available at arXiv]. It's a a must read if you are really into blockchain protocols, the underlying tech and their economics.
          p However, for the average investor, the "One Pager" and "Primer" documents may be a much easier start point to understand the Witnet project. Give them a look first!
      question
        h3(slot="question") Will Witnet work with Ethereum smart contracts?
        main(slot="answer")
          p #[strong Yes]. Ethereum smart contracts will be able to send data requests to the Witnet network and get the responses back thanks to a special kind of bridge nodes that will make Witnet act as a sidechain of Ethereum, Bitcoin or any other public blockchain.
          p Bridge nodes are explained in more detail in the #[a(href="//arxiv.org/pdf/1711.09756.pdf") Witnet protocol whitepaper].
      question
        h3(slot="question") How's Witnet different from Augur, Gnosis and other "prediction markets"?
        main(slot="answer")
          p Augur, Gnosis and similar projects rely mainly on human intervention to resolve their crowdsourced predictions about future events. This introduces latency and makes this schemes unsuitable for automated attestations needed by smart contracts and other software.
          p On the contrary, Witnet uses a network of witness nodes that run an automated web browser to retrieve and attest data from the Internet without human intervention. Attestation requests can report information that is already available online or be scheduled to retrieve some piece of data that will be published in the future.
          p Essentialy, #[strong Witnet is based on verifiable facts], not someone's predictions.
      question
        h3(slot="question") What's the development roadmap for Witnet?
        main(slot="answer")
          p Witnet is an open initiative and an open source project that will be developed by Witnet Foundation in collaboration with a number of other organizations and independent developers. This means that Witnet Foundation can't set the roadmap unilaterally.
          p However, Witnet Foundation has a strong commitment to comply with the following deadlines:
          ul
            li September 2018: a user-facing demo/prototype that will let users explore the potential of the protocol being built.
            li September 2019: a functional test network implementing the essential features of the Witnet protocol.
          p
            small Given the experimental nature of the technologies and network protocols under development, these dates may be subject to change due to reasons beyond the control of Witnet Foundation.
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
  export default class FAQSection extends Vue {}
</script>

<style scoped lang="stylus">
  main.faq
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
    ol.questions
      margin-top 50px
      counter-reset questions

  @media(max-width 800px)
    ol.questions
      padding 0
</style>