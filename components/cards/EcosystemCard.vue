<template>
  <a :href="link" target="_blank">
    <div :class="border ? 'card-container border' : 'card-container'">
      <img
        class="logo"
        :class="{ auto: border }"
        :src="src"
        alt=""
        aria-hidden="true"
      />
      <h2 class="title header-3">{{ title }}</h2>
      <p class="subtitle">{{ content }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 250px;
  row-gap: 16px;
  text-align: left;
  padding: 24px;
  justify-items: left;
  .logo {
    height: 170px;
    margin-bottom: 5px;
    max-width: 220px;

    &.auto {
      justify-self: flex-start;
    }
  }
  .title {
    color: $dark-blue;
    line-height: 1.2em;
  }
  .subtitle {
    color: $grey-5;
  }
  &.border {
    border: 1px solid $grey-1;
    border-radius: 4px;
    background-color: $grey-0;
    .title {
      color: $grey-3;
      text-align: left !important;
    }
  }
  &:not(.border) .title {
    letter-spacing: -0.02em;
  }
}
@media (max-width: 300px) {
  .card-container {
    grid-template-columns: 200px;
  }
}
</style>
