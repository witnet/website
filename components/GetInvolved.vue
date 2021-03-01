<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <h2 class="title">Come for the tech, stay for the fun!</h2>
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
      <p class="title">Get involved now</p>
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
.container {
  background-color: $white;
  color: $grey-4;
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
        color: $blue-5;
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
