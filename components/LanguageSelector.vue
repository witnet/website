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
      <!-- FIXME(#60): Get flag images for each language 
      <img class="image" :src="option.img" /> -->
      <span class="vs__selected">{{ option.locale }}</span>
    </template>

    <template #option="option">
      <!-- FIXME(#60): Get flag images for each language 
      <img class="image" :src="option.img" /> -->
      <span>{{ option.locale }}</span>
    </template>
  </vSelect>
</template>

<script>
// FIXME(#61): Change current language on click
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

  .vs__dropdown-menu {
    border: 1px solid #e2d7f4;
    box-shadow: 1px 1px 10px 2px rgba(92, 52, 138, 0.17);
    // background: red;
  }
  .vs__dropdown-option--highlight {
    background: #ababf5;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: black;
  }

  .image {
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .vs__selected {
    margin: 0;
  }

  // remove extra space
  .vs__search {
    padding: 0 !important;
  }
}

// avoid decrease size on open
.vs--single.vs--open .vs__selected {
  opacity: 1 !important;
  position: inherit !important;
}
</style>
