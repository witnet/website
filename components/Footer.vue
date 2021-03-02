<template>
  <div class="container">
    <div class="top">
      <div class="links">
        <p class="title">{{ $t('footer.links.witnet.title') }}</p>
        <a href="/">{{ $t('footer.links.witnet.oracle') }}</a>
        <a href="/">{{ $t('footer.links.witnet.token') }}</a>
        <a href="/">{{ $t('footer.links.witnet.ecosystem') }}</a>
        <a href="/">{{ $t('footer.links.witnet.community') }}</a>
      </div>
      <div class="links">
        <p class="title">{{ $t('footer.links.ecosystem.title') }}</p>
        <a href="/">{{ $t('footer.links.ecosystem.full_node') }}</a>
        <a href="/">{{ $t('footer.links.ecosystem.wallet') }}</a>
        <a href="/">{{ $t('footer.links.ecosystem.block_explorer') }}</a>
        <a href="/">{{ $t('footer.links.ecosystem.monitor') }}</a>
      </div>
      <div class="links">
        <p class="title">{{ $t('footer.links.community.title') }}</p>
        <a href="/">{{ $t('footer.links.community.telegram') }}</a>
        <a href="/">{{ $t('footer.links.community.discord') }}</a>
        <a href="/">{{ $t('footer.links.community.twitter') }}</a>
        <a href="/">{{ $t('footer.links.community.reddit') }}</a>
      </div>
      <p class="alliance-text">{{ $t('footer.ado_text') }}</p>
    </div>
    <div class="bottom">
      <p>WIT</p>
      <div>
        <i18n path="copyright.base" class="copyright" tag="p">
          <span>{{ $t('footer.copyright.witnet_foundation') }}</span>
          <span>{{ $t('footer.copyright.license') }}</span>
        </i18n>
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
  background-color: #12243a;
  color: white;
  padding: 40px 180px;
  .top {
    border-bottom: 1px solid white;
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
        color: white;
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
