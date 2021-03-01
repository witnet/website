<template>
  <SectionLayout class="get-involved-section">
    <div class="top">
      <div class="left">
        <h2 class="title">
          Come for the tech,
          <br />
          stay for the fun!
        </h2>
        <p class="content">
          From developers to miners and enthusiasts, the witnet community prouds
          itself on always being welcoming, discussing the things that really
          matter, and ensuring that witnet plays a key role in the foundations
          of Web3.
        </p>
      </div>
      <img
        class="dragon-image"
        src="@/assets/svg/dragon.png"
        alt="dragon-witnet"
      />
    </div>
    <div class="bottom">
      <h4 class="title">Get involved now</h4>
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
          title: 'Follow the project',
          content: 'Keep up with the latest news on Twitter.',
          links: [
            {
              text: '> @witnet_io on Twitter',
              url: 'https://',
            },
          ],
        },
        {
          title: 'Join the discussion',
          content: 'Help us shape the future of the project.',
          links: [
            {
              text: '> Telegram',
              url: 'https://',
            },
            {
              text: '> Discord',
              url: 'https://',
            },
          ],
        },
        {
          title: 'Find bugs, get tokens',
          content: 'A bug bounty program will be announced soon.',
          links: [
            {
              text: 'Stay tuned!',
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
