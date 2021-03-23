<template>
  <SectionLayout class="footer-section">
    <div class="top">
      <div class="links">
        <p class="title">{{ $t('footer.links.witnet.title') }}</p>
        <a class="link" href="/">{{ $t('footer.links.witnet.oracle') }}</a>
        <a class="link" href="/">{{ $t('footer.links.witnet.token') }}</a>
        <a class="link" href="/">{{ $t('footer.links.witnet.ecosystem') }}</a>
        <a class="link" href="/">{{ $t('footer.links.witnet.community') }}</a>
      </div>
      <div class="links">
        <p class="title">{{ $t('footer.links.ecosystem.title') }}</p>
        <a class="link" href="/">{{
          $t('footer.links.ecosystem.full_node')
        }}</a>
        <a class="link" href="/">{{ $t('footer.links.ecosystem.wallet') }}</a>
        <a class="link" href="/">{{
          $t('footer.links.ecosystem.block_explorer')
        }}</a>
        <a class="link" href="/">{{ $t('footer.links.ecosystem.monitor') }}</a>
      </div>
      <div class="links">
        <p class="title">{{ $t('footer.links.community.title') }}</p>
        <a class="link" href="/">{{ $t('footer.links.community.telegram') }}</a>
        <a class="link" href="/">{{ $t('footer.links.community.discord') }}</a>
        <a class="link" href="/">{{ $t('footer.links.community.twitter') }}</a>
        <a class="link" href="/">{{ $t('footer.links.community.reddit') }}</a>
      </div>
      <p class="alliance-text">{{ $t('footer.ado_text') }}</p>
    </div>
    <div class="bottom">
      <p>WIT</p>
      <div>
        <i18n path="footer.copyright.base" class="copyright" tag="p">
          <span>{{ $t('footer.copyright.witnet_foundation') }}</span>
          <span>{{ $t('footer.copyright.license') }}</span>
        </i18n>
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
