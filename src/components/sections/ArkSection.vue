<template lang="pug">
  main.ark.wrapped
    h2 Witnet and #[em Digital Knowledge Arks]
    figure.door
      img(src="/static/img/illustrations/ark.svg")
    article.introduction
      p Witnet, when paired with Distributed Storage Networks like #[a(href="//filecoin.io" target="_blank") Filecoin], will enable the creation of "Digital Knowledge Arks": decentralized, immutable, censorship-resistant and eternal archives of humanity's most relevant digital data.
      p A series of truth vaults aimed to ensure that knowledge and truth remains democratic and verifiable forever.

    article.motivation
      h3 Motivation
      blockquote.dictum
        q History is written by the victors.
        p Winston Churchill
      p Churchill’s famous dictum may appear to no longer hold true in an age where the Internet wields enormous potential for any person to share their beliefs and opinions with the rest of the world. However, centralized systems for the archiving of human knowledge are still very vulnerable to manipulation or destruction by corrupt governments and other malicious actors who could greatly benefit from altering history.
      p As a society we have the responsibility to find a better way to preserve our cultural heritage from any odds that the future may hold. And we need it to be highly resilient, decentralized, self-governed and censorship-resistant, guaranteeing that knowledge will be accessible to everyone, everywhere, at any time, without discrimination of any type. Only in this way we will be able to ensure that access to human knowledge will remain democratic forever.
      p Douglas R. Hofstadter, in his 1979 Pullitzer-winning book #[cite Gödel, Echer, Bach: An Eternal Golden Braid], states that #[q provability is a weaker notion than truth]. In this Information Age, verifiability is indeed very fragile because of the ephemerality inherent to digital media: one statement can be verifiable right now but lose its verifiability right after.
      aside.example
        p Let's visualize how fragile verifiability is:
        ol
          li Open a random Wikipedia article.
          li Scroll all the way down to the bottom of the page.
          li Follow all the links in the #[em References] and #[em External links] sections.
        hr.dashed
        p The chances are that at least one of the links is broken or does not point to the actual content it was supposed to.
      p #[strong As regards Witnet, the only possible truth is the verifiable one]. Indeed, verifiability is hard-coded into the design of the protocol. The mere act of performing distributed retrieval of data is in itself a form of verification, specially if several web sources are queried via multiple acquisition paths as described in the #[a(href="/static/witnet-whitepaper.pdf" target="_blank") Witnet whitepaper].  In the same manner, the fact that a final agreed claim emerges from the aggregation of all the claims brought by a plurality of miners proves itself that the claim was verifiable at the time of the attestation.
      p In a similar way to Witnet, Wikipedia has a strong policy stating that #[a(href="//en.wikipedia.org/wiki/Wikipedia:Verifiability,_not_truth" target="_blank") the only valid truth is the one you can verify]. Nevertheless, due to the ephemeral nature of the web, even a well documented Wikipedia article may be rendered questionable or even not suitable under the Wikipedia policies and guidelines if many of its sources disappeared from the web.
      blockquote.highlight We are clearly in need of some infallible way to ensure that some information that is verifiable today will remain verifiable tomorrow.
      p The current most popular approach to preserving the availability of some data is using the #[a(href="//archive.org/web/" target="_blank") Wayback Machine] service run by the Internet Archive initiative to request an on-demand snapshot of any web site in which the data is published. However, centralized solutions offer little to no guarantee of the very ingredients that make contents verifiable:
      ul
        li Content integrity: equivalence between the content in the snapshot and the actual content published on the web at the time it was taken.
        li Custody integrity: equivalence between the original content in the snapshot and the one presented when retrieving such snapshot after some time.
      p We would like to emphasize that our point here is not calling anyone’s honesty into doubt. Our point is to stress the fact that such a single source of truth, no matter how reliable it is, also represents a single point of failure that introduces the chance for external malicious actors to rewrite or delete part of the history by breaking into a single system or network.

    article.commons
      h3 Information as a Knowledge Commons
      p The commons is the cultural and natural resources accessible to all members of a society and held in common, not owned privately. Although the term originally referred to common land, nowadays it is taken to mean any shared and unregulated resource such a s atmosphere, oceans, rivers, fish stocks, or even an office refrigerator.
      p Those resources identified as commons are often said to be vulnerable to social dilemmas and governance problems that lead to competition for use, free riding, commodification, pollution, degradation, and ultimately non-sustainability. These dilemmas are highlighted by #[em the tragedy of the commons].
      p The concept of #[em tragedy of the commons] was introduced by ecologist Garrett Hardin in a 1968 article of the same name, inspired itself by an essay written in 1833 by the Victorian economist William Forster Lloyd.
      p The tragedy illustrates the argument that free access to a finite resource ultimately damage the resource through over-exploitation, temporarily or permanently. This occurs because the benefits of exploitation make some of the users want to maximize their own use while the costs of the exploitation are borne by everyone.  This, in turn, causes demand for the resource to increase, which causes the problem to snowball until the resource collapses.
      p However, #[strong knowledge forms part of a different kind of commons]: non-substractible ones. Unlike environmental commons—e.g. a water spring—multiple users can access the same resource with no negative effect on its quality or quantity. When a teacher gives a lesson, knowledge is not split between the students but replicated across the minds of all of them.
      blockquote.highlight While substractible and non-substractible commons are similar in their shared nature, there is a radical difference in the source of their value as resources. The value of substractible resources is based on scarcity, whilst the value of non-substractible resources is based on abundance.
      p Likewise, preservation of substractible and non-substractible commons involve very different actions. Preservation of a substractible commons often means guaranteeing its availability by regulating access or imposing reasonable use rules on the resources, effectively making it somewhat less open to the public. On the contrary, preservation of a non-substractible commons means guaranteeing its availability by making it accessible to the greatest number of people and effectively making it more open to the public.
      p The culture heritage mentioned before is none other than the #[em knowledge commons]: the set of all knowledge and wisdom that our civilization has accumulated over the centuries and belongs to the whole of humanity.
      blockquote.highlight The knowledge commons is our legacy from the past, what we know today, and what we will pass on to future generations.
      p The proposed Digital Knowledge Arks aim to form part itself of the digital commons as defined by social researcher Mayo Fuster: #[q information and knowledge resources that are collectively created and owned or shared between or among a community and that tend to be non-exclusive, that is, be (generally freely) available to third parties. Thus, they are oriented to favor use and reuse, rather than to exchange as a commodity. Additionally, the community of people building them can intervene in the governing of their interaction processes and of their shared resources].
      p The proposed Digital Knowledge Arks intend to leverage the current profusion of emerging blockchain technologies and projects to engage the people in the enrichment and preservation of the knowledge commons. It is conceived as a commons-based peer production initiative as defined by professor Yochai Benkler: #[q collaboration among large groups of individuals [...] who cooperate effectively to provide information, knowledge or cultural goods without relying on either market pricing or managerial hierarchies to coordinate their common enterprise].

    article.preservation
      h3 Preservation and its Principles
      p As mentioned earlier, preservation of knowledge commons entails guaranteeing the availability of knowledge resources by making them accessible to the greatest number of people, effectively making those resources more open to the public.
      p There is one program from the Stanford University Libraries that we would like to acknowledge here for its notable contribution to defining the principles of long-term preservation of knowledge commons. Its name is pretty explicit about what is the cornerstone of its vision: #[q Lots Of Copies Keep Stuff Safe] (LOCKSS).
      p The preservation principles of the LOCKSS program[56]—which we endorse and make them our own—focus on:
      ul
        li Decentralized and distributed preservation.
        li Preservation of original content.
        li Perpetual, guaranteed and seamless access.
        li Affordability and sustainability.
      p The Digital Knowledge Arks proposed here pay special attention to those very same principles, making the most of Decentralized Oracle Networks (DON) like Witnet, Decentralized Storage Networks (DSN) like #[a(href="//filecoin.io" target="_blank") Filecoin] and other blockchain technologies to ensure their effective attainment.

    article.witnet
      h3 Using Witnet to Agree on the Facts to be Preserved
      p Anyone interested in storing information in a Digital Knowledge Ark shall:
      ul
        li Create a Witnet RAD (#[q retrieve-attest-deliver]) request with one or more valid retrieval paths pointing to publicly available sources of such information.
        li Add a #[em deliver] clause to the request. This clause will ask for publication in a DSN.
        li Fund the transaction with an amount of Wit tokens enough to reward miners, witnesses and bridges.
        li Send the RAD request to the network, either directly as a client or through a bridge node as described in the #[a(href="/static/witnet-whitepaper.pdf" target="_blank") Witnet whitepaper].
      p Provided that all these points are met, the information will be retrieved and attested by the Witnet DON, and bridge nodes will publish it into the DSN of choice.

    article.perpetuity
      h3 Persisting Facts and Knowledge in Perpetuity
      p Perpetual storage is already possible in one way or another in most existing public blockchains.
      p For example, Ethereum smart contract can be used to keep data inside their state, which can be simply organized in a key-value mapping that allows entering a new record by calling an external function. The contract must calculate the hash of the data, use the hash as the key for storing the data and return the hash to the sender. Then the sender or anyone else who knows the hash can retrieve the data by calling a constant function using the hash as its sole parameter. Note that although data retrieval is made through a constant function and therefore can be performed an unlimited number of times at zero gas cost for the requesting party, data storage has side-effects (modifies state). This implies that the cost of the storage request increases linearly with the size of the data to be stored. While it can be a very acceptable solution for storing small data units in perpetuity, at scale, storing bigger data units (even in the order of a few kilobytes) becomes really expensive and impractical in most cases.
      p Instead, archiving of big data units should be done by using decentralized storage solutions specially designed for storage of high volumes of data.
      p There are already a bunch of promising projects that could be used for that purpose. Among the ones that better fit the requirements of the Ark, five deserve special mention here:
      ul
        li InterPlanetary File System (IPFS): a peer-to-peer distributed file system that seeks to connect all computing devices with the same system of files.
        li FileCoin: a distributed electronic currency whose nodes are incentivized to store as much of the entire network’s data as they can, using the IPFS protocol.
        li Sia: a platform for decentralized storage in which peers can freely form blockchain-based storage contracts in a free and open market.
        li Storj: a peer-to-peer cloud storage network implementing client-side encryption without reliance on a third party storage provider.
        li Swarm: a decentralized and redundant store of Ethereum’s public record, in particular to store and distribute dapp code and data as well as block chain data.
      p Interaction between the Witnet blockchain and these other networks will be made possible by DSN bridge nodes as introduced by the #[a(href="/static/witnet-whitepaper.pdf" target="_blank") Witnet whitepaper].
      p None of the aforementioned systems offer perpetual storage per se.  Instead, they allow for establishing the duration of the storage contract. The more is paid, the longer the data will be persisted. The cost for storing a certain amount of data for a defined period of time is driven by supply and demand, and different nodes compete on factors like reliability and price.
      p Ensuring that a certain data unit is never deleted from the decentralized storage system of choice thus imply recurrent costs. In order to impede deletion of data included in an Ark, interested clients and DSN bridges shall maintain an index that will relate all the archived data to the address of their corresponding storage contract and its date of expiry.
      p The same clients that originally requested the retrieval of the information and the formalization of a storage contract can keep sending additional tokens to the storage contract to keep it in force. In addition, shall those indexes be publicly available, any other interested party could extend the storage contract by independently funding it.
      blockquote.highlight In essence, as long as there are enough actors interested in maintaining humanity’s most relevant digital data preserved in the Ark, we can be certain that access to our cultural heritage and legacy will remain democratic forever.
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
  export default class ArkSection extends Vue {}
</script>

<style scoped lang="stylus">
  main.ark
    padding 50px 20px 60px 20px
    figure.door
      float right
      img
        height 300px
        transform scaleX(-1)
    h2
      font-size 2.5em
      font-weight 400
    h3
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
    blockquote.dictum
      max-width 400px
      margin 30px auto
      padding 50px 30px 30px 30px
      background #FDF6E5
      box-shadow 0 2px 30px #FDF6E5
      text-align center
      q
        font-style italic
        font-weight 600
        color #7F664C
    article
      margin-top 60px
      > p
        font-size 1.1em
      blockquote.highlight
        position relative
        font-size 1.8em
        font-weight 200
        font-style italic
        color #66
        &:before
          content '"'
          position absolute
          top -70px
          left -60px
          font-size 5em
          opacity .2
      ul > li, ol > li
        margin-bottom 5px
        font-size 1.1em
        color #44
      strong
        color #55
      q
        font-style italic
    aside.example
      position relative
      margin-top 25px
      padding 20px 30px 10px 30px
      border 1px dashed #3C52F3
      border-radius 4px
      &:before
        content 'EXAMPLE'
        position absolute
        top -1px
        left -1px
        padding 5px 10px
        background #3C52F3
        border-top-left-radius 4px
        border-bottom-right-radius 4px
        font-size .7em
        font-weight 700
        color #FF
      hr.dashed
        border none
        border-top 1px dashed #DD

  @media (max-width 800px)
    main.ark
      figure.door
        max-width 100vw
        float none
</style>