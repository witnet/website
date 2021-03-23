<template>
  <SectionLayout class="get-involved-section">
    <div class="top">
      <div class="left">
        <h2 class="title">{{ $t('get_involved.title') }}</h2>
        <p class="content">{{ $t('get_involved.content') }}</p>
      </div>
      <img
        class="dragon-image"
        src="@/assets/svg/dragon.png"
        :alt="$t('get_involved.witnet_pet_image_alt')"
      />
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
import SocialsCard from '@/components/cards/SocialsCard.vue'
import SectionLayout from '@/components/layouts/SectionLayout.vue'

export default {
  components: {
    SocialsCard,
    SectionLayout,
  },
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
  .bottom {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    justify-content: space-between;
    row-gap: 32px;
    column-gap: 48px;
    .title {
      grid-column: 1/-1;
      margin-bottom: 32px;
    }
  }
  .top {
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;
    .left {
      max-width: 35vw;
      .title {
        color: $blue-5;
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
      .left {
        max-width: 100vw;
      }
    }
  }
}
</style>
