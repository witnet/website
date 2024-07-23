<template>
  <vSelect
    v-model="language"
    :options="languageCodes"
    :clearable="false"
    :filterable="false"
    :searchable="false"
    class="language-selector"
    :class="{ flag: flag }"
  >
    <template #selected-option-container="{ option }">
      <span v-if="flag" class="vs__selected">
        <component :is="iconMap[(option as Option).label]" />
      </span>
      <span v-else class="vs__selected">
        {{ languageLocales[(option as Option).label].name }}
      </span>
    </template>

    <template #option="option">
      <div class="option">
        <component
          :is="iconMap[(option as Option).label]"
          v-if="flag"
          class="dropdown-items"
        />
        <span>{{ languageLocales[(option as Option).label].name }}</span>
      </div>
    </template>
  </vSelect>
</template>
<script setup lang="ts">
import vSelect from 'vue-select'
import { languageLocales } from '@/constants'
import { localeCodes, type Locale } from '@/types'
import esESIcon from '@/assets/svg/sp-flags.svg?component'
import enUSIcon from '@/assets/svg/flag-eeuu.svg?component'
import 'vue-select/dist/vue-select.css'
const { locale, setLocale } = useI18n()

defineProps({
  flag: {
    type: Boolean,
    default: false,
  },
})

type Option = {
  label: localeCodes
}
interface Dictionary {
  [key: string]: any
}

const language = computed({
  get: () => locale.value,
  set: (value: any) => {
    setLocale(value)
  },
})

const languageCodes: ComputedRef<Array<Locale>> = computed(() => {
  return Object.values(languageLocales).map((locale) => locale.code)
})

const iconMap: Dictionary = computed(() => {
  return {
    [localeCodes.es]: esESIcon,
    [localeCodes.en]: enUSIcon,
  }
})
</script>

<style lang="scss">
.vs--open {
  .vs__open-indicator {
    transform: rotate(180deg) scale(0.5) !important;
  }
}
.language-selector {
  .option {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: flex-start;
    align-items: center;
    height: 48px;
  }
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    background: transparent;
    box-shadow: none;
    border: none;
    color: $black;
    min-width: max-content;
    border-radius: 16px;
    font-size: 14px;
    .dropdown-items {
      margin-right: 8px;
    }
  }
  .vs__dropdown-menu {
    width: 80px;
    top: -90px;
    left: -24px;
  }
  &.flag {
    .vs__dropdown-menu {
      width: 80px;
      top: -90px;
      left: -110px;
    }
  }
  .vs__open-indicator {
    font-size: 8px;
  }
  .vs__dropdown-menu {
    background: $white;
  }

  .vs__dropdown-option {
    font-family: 'NeueMachina-Regular', sans-serif;
    color: $black;
  }

  .vs__dropdown-option--highlight {
    color: $white;
    background: $black;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: $white;
    transform: scale(0.5);
    transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);
    transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  }

  .image {
    height: 25px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .vs__selected {
    color: $white;
    margin: 0;
    padding: 4px 0 0 0;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

@media (max-width: 706px) {
  .language-selector {
    padding: 8px 8px;
    .vs__selected {
      width: 100px;
    }
    .vs__dropdown-menu {
      top: -80px;
      left: 24px;
    }
  }
}
</style>
