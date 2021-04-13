<template>
  <BaseCard class="socials-container">
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
export default {
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
  max-width: 300px;
}
.content {
  font-size: 0.9375rem;
}
.links-container {
  display: flex;
  justify-content: left;
  .link {
    font-size: 0.9375rem;
    margin-right: 16px;
    color: $green-1;
    padding: 4px 0 4px 0;
  }
}
.title {
  font-weight: bold;
}
</style>
