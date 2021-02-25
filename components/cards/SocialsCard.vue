<template>
  <BaseCard>
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
    <div class="links-container">
      <a v-for="link in links" :key="link.text" :href="link.url" class="link">
        {{ link.text }}
      </a>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/cards/BaseCard.vue'

export default {
  components: {
    BaseCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.socials-container {
  height: 150px;
  padding: 16px;
  justify-content: left;
  border: 2px solid white;
  background-color: white;
  position: relative;
  z-index: 10;
  border-radius: 4px;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  align-items: center;
}

.links-container {
  display: flex;
  justify-content: left;
  .link {
    margin-right: 16px;
    color: #5fbfae;
    padding: 4px 0 4px 0;
  }
}

.title {
  font-weight: bold;
}

.socials-container::after {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  top: -16px;
  left: -16px;
  right: 8px;
  bottom: 8px;
  border: 2px solid #4d4d4d;
  border-radius: 4px;
}
</style>
