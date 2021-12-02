<template>
  <SectionLayout
    class="get-involved-section"
    :full-background="true"
    background-color="#f9f9f9"
  >
    <div class="top">
      <img
        class="dragon-image"
        src="@/assets/images/community.svg"
        alt=""
        aria-hidden="true"
      />
      <div class="right">
        <i18n path="get_involved.title.main" class="title header-2" tag="h1">
          <span class="gradient">
            {{ $t('get_involved.title.gradient') }}
          </span>
        </i18n>
        <p class="subtitle">{{ $t('get_involved.content') }}</p>
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
import { urls } from '../constants'

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
              url: urls.twitter,
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
              url: urls.telegram,
            },
            {
              text: this.$t(
                'get_involved.social.join_discussion.links.discord'
              ),
              url: urls.discord,
            },
          ],
        },
        {
          title: this.$t('get_involved.social.find_bugs.title'),
          content: this.$t('get_involved.social.find_bugs.content'),
          links: [
            {
              text: this.$t('get_involved.social.find_bugs.stay_tuned'),
              url: urls.telegram,
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
  font-weight: lighter;
  padding: 40px 0 40px 0;
  .title {
    display: inline-block;
    .gradient {
      display: inline-block;
      background: linear-gradient(90deg, $purple-2 43%, $coral 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .bottom {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    justify-content: center;
    row-gap: 32px;
    column-gap: 25px;
    .title {
      font-family: Almarai, sans-serif;
      font-weight: bold;
      grid-column: 1/-1;
      justify-self: center;
      font-size: 1.3125rem;
      align-self: center;
    }
  }
  .top {
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    .right {
      max-width: 600px;

      .title {
        color: $dark-blue;
        margin-bottom: 16px;
      }
    }
    .dragon-image {
      width: 350px;
    }
  }
}
@media (max-width: 1200px) {
  .get-involved-section {
    .top {
      flex-wrap: wrap;
      max-width: 500px;
      margin: 0 auto;
      margin-bottom: 48px;
      justify-content: left;
      .right {
        margin-top: 16px;
        align-items: flex-start;
        width: 100vw;
      }
      .dragon-image {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
    .bottom {
      grid-template-columns: auto;
    }
  }
}
</style>
