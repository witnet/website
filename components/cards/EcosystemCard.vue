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
      <h3 class="title" :class="{ border }">{{ title }}</h3>
      <p class="subtitle" :class="{ border }">{{ content }}</p>
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
  &.border {
    border: 1px solid $grey-1;
    border-radius: 4px;
    background-color: $grey-0;
  }
  .title {
    color: $dark-blue;
    &.border {
      color: $grey-3;
    }
  }
  .subtitle {
    &.border {
      color: $grey-3;
    }
  }

  .logo {
    height: 170px;
    padding: 16px;
  }
}
</style>
