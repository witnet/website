<template>
  <vSelect
    v-model="selected"
    :clearable="false"
    :filterable="false"
    :options="options"
    :searchable="false"
    class="language-selector"
    placeholder="Choose a Styling Option"
  >
    <template #selected-option-container="{ option }">
      <img class="image" :src="option.img" />
      <span class="vs__selected">{{ option.locale }}</span>
    </template>

    <template #option="option">
      <img class="image" :src="option.img" />
      <span>{{ option.name }}</span>
    </template>
  </vSelect>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      displayBox: false,
      selected: {
        name: 'english',
        locale: 'EN',
        img: require('@/assets/svg/dragon.png'),
      },
      options: [
        {
          name: 'english',
          locale: 'EN',
          img: require('@/assets/svg/dragon.png'),
        },
        {
          name: 'spanish',
          locale: 'ES',
          img: require('@/assets/svg/dragon.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.language-selector {
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
    min-width: max-content;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: black;
  }

  .image {
    width: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }
}

// avoid decrease size on open
.vs--single.vs--open .vs__selected {
  opacity: 1 !important;
  position: inherit !important;
}
</style>
