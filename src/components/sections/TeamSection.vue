<template lang="pug">
main.team.wrapped
  article
    h2 About Witnet Foundation
    p Witnet is an open source project originally devised by #[a(href="//stampery.com", target="_blank") Stampery], the leaders of blockchain-powered data certification. The protocol is now being developed by Witnet Foundation in collaboration with a community of independent contributors.
    p Witnet Foundation is a non profit organization whose mission is ensuring the successful development and deployment of the Witnet protocol, as well as guaranteeing its sustainability and fostering the ecosystem of applications built on top of the protocol.
    p Although Witnet Foundation will play a leading role during the first years, as the project evolves and the Witnet community becomes wider, Witnet Foundation will progressively relinquish its weight in favor of the community.
  article
    h2 Who we are
    div.subart.leaders
      h3 Project Leaders
      figure.person
        img(src="/static/img/team/adan.jpg")
        figcaption
          strong Adán Sánchez de Pedro
          em Cofounder and Tech Lead
          p CTO at Stampery, founder of LoquiIM and Whatools, lecturer, amateur ukulele player and politically aware citizen.
      figure.person
        img(src="/static/img/team/daniele.jpg")
        figcaption
          strong Daniele Levi
          em Cofounder and Operations Lead
          p CEO at Stampery, cryptocurrency pioneer, serial entrepreneur and cryptography enthusiast.
    div.subart.team
      h3 Team
      figure.person
        img(src="https://s3.amazonaws.com/stampery-cdn/build/rsc/photos/johann.jpg?=1499247229220")
        figcaption
          strong Johann Ortiz
          em Back-end Software Engineer
      figure.person
        img(src="https://assets.republic.co/assets/default/user/medium-c2559faff1a8ec3af897753a7480d9e3bd8c484094f15e4fea3202fc23fa9ea8.svg")
        figcaption
          strong Maybe you? #[a(href="mailto:info@witnet.foundation?subject=Back-end Software Engineer") Apply now!]
          em Back-end Software Engineer
      figure.person
        img(src="https://assets.republic.co/assets/default/user/medium-c2559faff1a8ec3af897753a7480d9e3bd8c484094f15e4fea3202fc23fa9ea8.svg")
        figcaption
          strong Maybe you? #[a(href="mailto:info@witnet.foundation?subject=Solidity Engineer") Apply now!]
          em Solidity and Smart Contracts Developer
      figure.person
        img(src="https://assets.republic.co/assets/default/user/medium-c2559faff1a8ec3af897753a7480d9e3bd8c484094f15e4fea3202fc23fa9ea8.svg")
        figcaption
          strong Maybe you? #[a(href="mailto:info@witnet.foundation?subject=Front-end Software Engineer") Apply now!]
          em Front-end Software Engineer
      figure.person
        img(src="https://assets.republic.co/assets/default/user/medium-c2559faff1a8ec3af897753a7480d9e3bd8c484094f15e4fea3202fc23fa9ea8.svg")
        figcaption
          strong Maybe you? #[a(href="mailto:info@witnet.foundation?subject=Scientific Research Lead") Apply now!]
          em Scientific Research Lead
      figure.person
        img(src="https://assets.republic.co/assets/default/user/medium-c2559faff1a8ec3af897753a7480d9e3bd8c484094f15e4fea3202fc23fa9ea8.svg")
        figcaption
          strong Maybe you? #[a(href="mailto:info@witnet.foundation?subject=Community Lead") Apply now!]
          em Community and Contents Lead
      figure.person
        img(src="https://assets.republic.co/assets/default/user/medium-c2559faff1a8ec3af897753a7480d9e3bd8c484094f15e4fea3202fc23fa9ea8.svg")
        figcaption
          strong Maybe you? #[a(href="mailto:info@witnet.foundation?subject=Operations Lead") Apply now!]
          em Operations Assistant
    div.subart.advisors
      h3 Advisory board
      figure.person
        img(src="https://uploads.republic.co/p/roles/team_members/avatars/large/000/000/668/668-1519664002-bbedd878b1e2ec6bb9be90a4b5b7cae7aff540d2.png")
        figcaption
          strong Luis Iván Cuende
          em Whitepaper Co-Author and Project Advisor
          p Project Lead at #[a(href="//district0x.io", target="_blank") Aragon]. Stampery co-founder. Forbes 30 under 30 & MIT TR3
      figure.person
        img(src="https://crunchbase-production-res.cloudinary.com/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/kjtbvrrphusrmdjrn6lf")
        figcaption
          strong Joe Urgo
          em Whitepaper Reviewer and Project Advisor
          p Cofounder and Operations Lead at #[a(href="//district0x.io", target="_blank") district0x]
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class TeamSection extends Vue {}
</script>

<style scoped lang="stylus">
main.team
  padding 50px 20px 60px 20px
  article
    margin-bottom 50px
    div.subart
      margin-bottom 20px
      overflow auto
      &.team
        figure.person
          width 33%
          img
            width 120px
            height 120px
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
    h3
      margin 20px 0
      font-weight 100
      font-size 1.4em
      color #99
      text-align center
      &:after
        content ''
        display block
        width 30px
        border-bottom 1px solid #DD
        margin 10px auto
    figure.person
      float left
      margin 0 0 20px 0
      padding 20px 0
      width 50%
      text-align center
      img
        width 150px
        height 150px
        background #DD
        border-radius 6px
      figcaption
        width 100%
        padding 0 60px
        strong
          display block
          margin-top 8px
          color #33
          a
            font-size .7em
        em
          display block
          margin-top -4px
          margin-bottom -8px
          color #66

  @media (max-width 1000px)
    article figure.person figcaption
      padding 10px

  @media (max-width 600px)
    article
      div
        figure.person
          width 100%!important
</style>