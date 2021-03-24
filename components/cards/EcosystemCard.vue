<template>
  <div :class="border ? 'card-container border' : 'card-container'">
    <img
      class="logo"
      :class="{ auto: border }"
      :src="src"
      alt=""
      aria-hidden="true"
    />
    <h3 :class="border ? 'title border' : 'title'">{{ title }}</h3>
    <p :class="border ? 'subtitle border' : 'subtitle'">{{ content }}</p>
  </div>
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
  justify-items: center;
  row-gap: 16px;
  text-align: left;
  padding: 24px;
  &.border {
    border: 1px solid $grey-1;
    border-radius: 4px;
    background-color: $white;
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

    &.auto {
      height: auto;
    }
  }
}
</style>
