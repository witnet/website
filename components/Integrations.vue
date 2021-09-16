<template>
  <SectionLayout class="integrations-section" :full-background="true">
    <i18n path="integrations.title.main" class="title header-2" tag="h1">
      <span class="gradient">{{ $t('integrations.title.gradient') }}</span>
    </i18n>
    <div class="integrations-card-container">
      <IntegrationsCard
        v-for="integration in integrations"
        :key="integration.title"
        :link="integration.link"
        :title="integration.title"
        :src="integration.src"
      />
    </div>
  </SectionLayout>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      integrations: [
        {
          title: 'Boba',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.mining,
        },
        {
          title: 'Aragon',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.sheikah,
        },
        {
          title: 'Loren ipsum',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.truffleBox,
        },
        {
          title: 'Loren ipsum',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.blockExplorer,
        },
        {
          title: 'Loren ipsum',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.docs,
        },
        {
          title: 'Loren ipsum',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.docs,
        },
        {
          title: 'Loren ipsum',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.docs,
        },
        {
          title: 'Loren ipsum',
          src: require('@/assets/images/question_mark.svg'),
          link: urls.docs,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.integrations-section {
  text-align: justify;
  position: relative;
  &::before {
    content: '';
    left: 0;
    right: 0;
    bottom: -100px;
    height: 100px;
    margin-bottom: 32px;
    background-color: $white;
    position: absolute;
    clip-path: ellipse(60% 100% at 50% 0%);
  }
  .title {
    margin-bottom: 16px;
    text-align: center;
    .gradient {
      display: inline-block;
      background: linear-gradient(90deg, $pink 43%, $electric-blue 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .integrations-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    row-gap: 24px;
    column-gap: 56px;
    justify-items: center;
    margin-bottom: 25px;
    margin-top: 60px;
  }
}

@media (max-width: 1200px) {
  .integrations-section {
    .integrations-card-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 690px) {
  .integrations-section {
    text-align: justify;
    .title {
      margin-bottom: 16px;
      text-align: center;
      .gradient {
        background: linear-gradient(
          90deg,
          $pink 0%,
          $pink 43%,
          $electric-blue 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
    }
    .integrations-card-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 25px;
      justify-items: center;
    }
  }
}
</style>
