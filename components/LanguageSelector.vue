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
import {
  findLanguage,
  getLanguageFromUrl,
  getExpandedLanguages,
} from '../utils'

export default {
  data() {
    const expandedLanguages = getExpandedLanguages(languages)

    return {
      displayBox: false,
      selected:
        findLanguage(expandedLanguages, getLanguageFromUrl(this.$route.path)) ||
        findLanguage(expandedLanguages, defaultLocale),
      options: expandedLanguages,
    }
  },
  watch: {
    selected: {
      handler(selected) {
        this.$router.push(`/${selected.code}`)
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
    border-bottom: 1px solid $white;
    box-shadow: none;
    border-radius: 0;
    color: $white;
    min-width: max-content;
    font-size: var(--footer-text-size);
  }
  .vs__open-indicator {
    font-size: 8px;
  }
  .vs__dropdown-menu {
    background: $white;
    top: -80px;
    border: 2px solid $white;
  }

  .vs__dropdown-option {
    font-family: 'NeueMachina-Regular', sans-serif;
    font-size: var(--footer-text-size);
    color: $darkest-blue;
  }

  .vs__dropdown-option--highlight {
    color: $white;
    background: $dark-blue;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: $darkest-blue;
  }

  .image {
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .vs__selected {
    color: $white;
    font-family: 'NeueMachina-Regular', sans-serif;
    margin: 0;
    padding: 4px 0 0 0;
    font-size: var(--footer-text-size);
  }
  &:hover {
    .vs__selected {
      color: $white;
    }
    .vs__open-indicator {
      color: $white;
    }
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
