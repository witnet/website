<template lang="pug">
  main.faq.wrapped
    h2 Frequently Asked Questions
    ol.questions
      question
        h3(slot="question") Where can I read the Witnet whitepaper?
        main(slot="answer")
          p The Witnet protocol whitepaper is #[a(href="/static/witnet-whitepaper.pdf") available at arXiv]. It's a a must read if you are really into blockchain protocols, the underlying tech and their economics.
          p However, for the average investor, the "One Pager" and "Primer" documents may be a much easier start point to understand the Witnet project. Give them a look first!
      question
        h3(slot="question") Will Witnet work with Ethereum smart contracts?
        main(slot="answer")
          p #[strong Yes]. Ethereum smart contracts will be able to send data requests to the Witnet network and get the responses back thanks to a special kind of bridge nodes that will make Witnet act as a sidechain of Ethereum, Bitcoin or any other public blockchain.
          p Bridge nodes are explained in more detail in #[a(href="//medium.com/witnet/ethereum-loves-witnet-9a3fd21e6f5c") this article from our blog].
      question
        h3(slot="question") What's the development roadmap for Witnet?
        main(slot="answer")
          p Witnet is an open initiative and an open source project that will be developed by Witnet Foundation in collaboration with a number of other organizations and independent developers. This means that Witnet Foundation can't set the roadmap unilaterally.
          p However, Witnet Foundation has a strong commitment to ensure the following milestones are met:
          ul
            li By September 2018: a user-facing demo/prototype that will let users explore the potential of the protocol being built.
            li By September 2019: a functional test network implementing the essential features of the Witnet protocol.
          p
            small Given the experimental nature of the technologies and network protocols under development, these dates and deliverables may be subject to change due to reasons beyond the control of Witnet Foundation.
      question
        h3(slot="question") How's Witnet different from Augur, Gnosis and other "prediction markets"?
        main(slot="answer")
          p Augur, Gnosis and similar projects rely mainly on human intervention to resolve their crowdsourced predictions about future events. This introduces latency and makes thosess schemes unsuitable for automated attestations needed by smart contracts and other software.
          p On the contrary, Witnet uses a network of witness nodes that run an automated web browser to retrieve and attest data from the Internet without human intervention. Attestation requests can report information that is already available online or be scheduled to retrieve some piece of data that will be published in the future.
          p Essentialy, #[strong Witnet is based on verifiable facts], not someone's predictions.
      question
        h3(slot="question") How's Witnet different from Chainlink and other oracle projects?
        main(slot="answer")
          p Most oracle projects base their approach on specialized oracles. Each oracle is connected only to a certain set of APIs or protocols, and you must choose which oracle to use.
          p From our perspective, specialized oracles are:
          ol
            li likely to have conflicts of interest,
            li scarce and thus rather centralized as too much trust is put on each of them,
            li trivially predictable and thus easily targetable by DoS attacks.
          p In these schemes, oracle nodes typically use a trusted execution environment known as Intel SGX. This "enclave" is only available on selected hardware, so it's a clear entry barrier. Moreover, the SGX has recently been #[a(href="//arxiv.org/pdf/1702.08719.pdf") proven vulnerable] to #[a(href="//spiral.imperial.ac.uk/bitstream/10044/1/42264/2/esorics2016%20%281%29.pdf") many attacks], #[a(href="//github.com/lsds/spectre-attack-sgx") including Spectre].
          p Also, "tokenomics" of projects like ChainLink rely heavily on ERC-20 tokens in the Ethereum blockchain to incentivize oracles to resolve tasks. This fact will hinder their viability until Ethereum's scalability challenges are solved or they accept alternative means of payment.
          p Witnet approach is instead based on the most generalized form of oracles. They perform "retrieve-attest-deliver" tasks without distinction between the sources they query. Weather APIs are not that different from courier APIs! This way, we get rid of any conflict of interests, given that oracle nodes can't even predict which tasks will be assigned to them.
          p In Witnet, the oracle nodes in the network are called "witnesses". They are automated headless browsers that you can hire to retrieve information from the Internet and deliver it to you or your smart contracts. The more fees you pay, the more the number of witnesses that will be employed.
          p Although you can decide how many witnesses to employ, the thing is that you can't choose who they are. Tasks are randomly assigned to witnesses in proportion to their reputation.
          p Our proposal has a "fairness principle" hard-written into every detail. That's the main reason for refusing the use of TEEs or the SGX. We want to give everyone the possibility to spend the spare CPU and bandwidth of their computers (or servers, or phones, or even fridges!) fulfilling retrieve-attest-deliver tasks and earning rewards in exchange.
          p About the "tokenomics", we decided to build Wit as a native token to its own blockchain because in our case it makes no sense to cope with the challenges of running it upon a widely used PoW chain like Ethereum or Bitcoin.
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