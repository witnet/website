<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <h2 class="title">{{ $t('get_involved.title') }}</h2>
        <p class="content">{{ $t('get_involved.content') }}</p>
      </div>
      <img
        class="dragon-image"
        src="@/assets/svg/dragon.png"
        :alt="$t('witnet_pet_image_alt')"
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
  </div>
</template>

<script>
import SocialsCard from '@/components/cards/SocialsCard.vue'

export default {
  components: {
    SocialsCard,
  },
  data() {
    return {
      socials: [
        {
          title: this.$t('social.follow.title'),
          content: this.$t('social.follow.content'),
          links: [
            {
              text: this.$t('social.follow.links.twitter'),
              url: 'https://',
            },
          ],
        },
        {
          title: this.$t('social.join_discussion.title'),
          content: this.$t('social.join_discussion.content'),
          links: [
            {
              text: this.$t('social.join_discussion.link.telegram'),
              url: 'https://',
            },
            {
              text: this.$t('social.join_discussion.link.discord'),
              url: 'https://',
            },
          ],
        },
        {
          title: this.$t('social.find_bugs.title'),
          content: this.$t('social.find_bugs.content'),
          links: [
            {
              text: this.$t('social.find_bugs.stay_tuned'),
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
.container {
  background-color: #f9f9f9;
  color: #4d4d4d;
  padding: 56px 180px;
  .bottom {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    justify-content: space-between;
    row-gap: 32px;
    column-gap: 48px;
    .title {
      margin-bottom: 32px;
      grid-column: 1/-1;
      font-size: 18px;
      font-weight: bold;
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
        font-size: 32px;
        font-weight: bold;
        color: #12243a;
        margin-bottom: 16px;
      }
      .content {
        font-size: 16px;
      }
    }
    .dragon-image {
      width: 300px;
    }
  }
}
@media (max-width: 1200px) {
  .container {
    padding: 40px 40px;
    .top {
      flex-wrap: wrap;
      .left {
        max-width: 100vw;
      }
    }
  }
}
</style>
