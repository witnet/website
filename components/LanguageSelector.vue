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
      <span class="vs__selected">{{ option.label }}</span>
    </template>

    <template #option="option">
      <!-- FIXME(#60): Get flag images for each language 
      <img class="image" :src="option.img" /> -->
      <span>{{ option.label }}</span>
    </template>
  </vSelect>
</template>

<script>
import { defaultLocale } from '../default'
import { languages } from '../constants'
import { findLanguage } from '../utils'

export default {
  data() {
    const selectedLanguage = this.$route.path.replace('/', '') || defaultLocale
    const expandedLanguages = languages.map((language) => ({
      ...language,
      img: require('@/assets/svg/dragon.png'),
      label: language.code.toUpperCase(),
    }))

    return {
      displayBox: false,
      selected:
        findLanguage(expandedLanguages, selectedLanguage) ||
        findLanguage(expandedLanguages, defaultLocale),
      options: expandedLanguages,
    }
  },
  watch: {
    selected: {
      handler(selected) {
        this.$router.push(selected.code)
      },
      deep: true,
    },
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
    color: $dark-blue;
    min-width: max-content;
    font-size: 0.75rem;
  }

  .vs__dropdown-menu {
    border: 1px solid $grey-1;
    box-shadow: 1px 1px 10px 2px $alpha-purple;
  }
  .vs__dropdown-option--highlight {
    background: $green-1;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: $black;
  }

  .image {
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .vs__selected {
    margin: 0;
    padding: 4px 0 0 0;
  }

  // remove extra space
  .vs__search {
    padding: 0 !important;
  }

  &:hover {
    .vs__selected {
      margin: 0;
      color: $green-1;
    }
    .vs__open-indicator {
      fill: $green-1;
    }
  }
}

// avoid decrease size on open
.vs--single.vs--open .vs__selected {
  opacity: 1 !important;
  position: inherit !important;
}
</style>
