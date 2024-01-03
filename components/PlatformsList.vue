<template>
  <div>
    <PlatformLink
      v-for="platform in platforms"
      :key="platform.name"
      :name="platform.name"
      :url="platform.url"
      :icon="platform.icon"
    />
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import icon from '@/assets/svg/flag-eeuu.svg?component'
import { URLS } from '@/constants'

type Platform = {
  name: string
  url: string
  icon: FunctionalComponent
}
const platforms: Ref<Array<Platform>> = shallowRef([
  {
    name: 'Docker',
    url: URLS.dockerNode,
    icon,
  },
  {
    name: 'Windows',
    url: URLS.windowsNode,
    icon,
  },
  {
    name: 'macOS',
    url: URLS.macosNode,
    icon,
  },
  {
    name: 'GNU/Linux',
    url: URLS.linuxNode,
    icon,
  },
  {
    name: 'Rasberry Pi',
    url: URLS.rasberrypiNode,
    icon,
  },
])
</script>
