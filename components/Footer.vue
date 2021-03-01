<template>
  <SectionLayout class="footer-section">
    <div class="top">
      <div class="links">
        <p class="title">Witnet</p>
        <a class="link" href="/">Oracle</a>
        <a class="link" href="/">Token</a>
        <a class="link" href="/">Ecosystem</a>
        <a class="link" href="/">Community</a>
      </div>
      <div class="links">
        <p class="title">Ecosystem</p>
        <a class="link" href="/">Full node</a>
        <a class="link" href="/">Wallet</a>
        <a class="link" href="/">Block explorer</a>
        <a class="link" href="/">Network monitor</a>
      </div>
      <div class="links">
        <p class="title">Community</p>
        <a class="link" href="/">Telegram</a>
        <a class="link" href="/">Discord</a>
        <a class="link" href="/">Twitter</a>
        <a class="link" href="/">Reddit</a>
      </div>
      <p class="alliance-text small-description">
        Witnet is part of the Alliance of Decentralized Oracles (ADO), a joint
        effort by leading decentralized oracle solutions to make the life of
        smart contract developers easier by creating oracle standards. Learn
        more about the ADO at theado.org
      </p>
    </div>
    <div class="bottom">
      <p>WIT</p>
      <div>
        <p class="copyright">
          © 2018–2021 by <span>Witnet Foundation</span> and individual
          contributors. Content available under a
          <span>Creative Commons license</span>.
        </p>
      </div>
      <div>ENG ^</div>
    </div>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  name: 'Footer',
  components: {
    SectionLayout,
  },
}
</script>

<style lang="scss" scoped>
.footer-section {
  background-color: $blue-5;
  color: $white;
  .top {
    border-bottom: 1px solid $white;
    display: grid;
    padding-bottom: 40px;
    column-gap: 40px;
    row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: space-between;
    .links {
      display: flex;
      flex-direction: column;
      .link {
        font-size: 0.87rem;
        color: $white;
        padding: 4px 0 4px 0;
      }
      .title {
        font-weight: bold;
        padding: 8px 0 8px 0;
      }
    }
    .alliance-text {
      grid-column: span 2;
      line-height: 1.5;
    }
  }
  .bottom {
    padding-top: 40px;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    column-gap: 24px;
    .copyright {
      line-height: 1.5;
      max-width: 350px;
    }
  }
}
</style>
