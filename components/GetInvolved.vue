<template>
  <SectionLayout class="get-involved-section">
    <div class="top">
      <img
        class="dragon-image"
        src="@/assets/images/dragon.png"
        alt=""
        aria-hidden="true"
      />
      <div class="right">
        <i18n path="get_involved.title.main" class="title" tag="h2">
          <span class="gradient">{{ $t('get_involved.title.gradient') }}</span>
        </i18n>
        <p class="content">{{ $t('get_involved.content') }}</p>
      </div>
    </div>
    <div class="bottom">
      <p class="title">{{ $t('get_involved.subtitle') }}</p>
      <div v-for="social in socials" :key="social.title">
        <SocialsCard
          :title="social.title"
          :content="social.content"
          :links="social.links"
        />
      </div>
    </div>
  </SectionLayout>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          title: this.$t('get_involved.social.follow.title'),
          content: this.$t('get_involved.social.follow.content'),
          links: [
            {
              text: this.$t('get_involved.social.follow.links.twitter'),
              url: 'https://',
            },
          ],
        },
        {
          title: this.$t('get_involved.social.join_discussion.title'),
          content: this.$t('get_involved.social.join_discussion.content'),
          links: [
            {
              text: this.$t(
                'get_involved.social.join_discussion.links.telegram'
              ),
              url: 'https://',
            },
            {
              text: this.$t(
                'get_involved.social.join_discussion.links.discord'
              ),
              url: 'https://',
            },
          ],
        },
        {
          title: this.$t('get_involved.social.find_bugs.title'),
          content: this.$t('get_involved.social.find_bugs.content'),
          links: [
            {
              text: this.$t('get_involved.social.find_bugs.stay_tuned'),
              url: null,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.get-involved-section {
  background-color: $grey-0;
  color: $grey-4;
  .gradient {
    background: linear-gradient(
      90deg,
      $purple-2 0%,
      $purple-2 43%,
      $coral 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bottom {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 20vw));
    justify-items: center;
    justify-content: center;
    row-gap: 32px;
    column-gap: 48px;
    .title {
      font-weight: bold;
      grid-column: 1/-1;
      justify-self: center;
      align-self: center;
    }
  }
  .top {
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    .right {
      max-width: 35vw;
      .title {
        color: $dark-blue;
        margin-bottom: 16px;
      }
    }
    .dragon-image {
      width: 300px;
    }
  }
}
@media (max-width: 1200px) {
  .get-involved-section {
    .top {
      flex-wrap: wrap;
      .right {
        margin-top: 16px;
        max-width: 100vw;
      }
    }
    .bottom {
      grid-template-columns: auto;
    }
  }
}
</style>
