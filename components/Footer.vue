<template>
  <div class="container">
    <div class="top">
      <div class="links">
        <p class="title">Witnet</p>
        <a href="/">Oracle</a>
        <a href="/">Token</a>
        <a href="/">Ecosystem</a>
        <a href="/">Community</a>
      </div>
      <div class="links">
        <p class="title">Ecosystem</p>
        <a href="/">Full node</a>
        <a href="/">Wallet</a>
        <a href="/">Block explorer</a>
        <a href="/">Network monitor</a>
      </div>
      <div class="links">
        <p class="title">Community</p>
        <a href="/">Telegram</a>
        <a href="/">Discord</a>
        <a href="/">Twitter</a>
        <a href="/">Reddit</a>
      </div>
      <p class="alliance-text">
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  background-color: $blue-5;
  color: $white;
  padding: 40px 180px;
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
      font-size: 14px;
      a {
        text-decoration: none;
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
      font-size: 12px;
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
      font-size: 10px;
    }
  }
}
@media (max-width: 1200px) {
  .container {
    padding: 40px 40px;
  }
}
</style>
