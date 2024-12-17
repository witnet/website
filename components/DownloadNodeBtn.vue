<template>
  <client-only>
    <WButton :type="ButtonType.dark" class="mb-md">
      <a :href="primaryActionUrl" target="_blank">
        <i18n-t :keypath="primaryActionLocalePath" tag="p" scope="global">
          <span v-if="release" class="ml-[4px]">{{ release.platform }}</span>
        </i18n-t>
      </a>
    </WButton>
    <p v-if="release" class="text text-wit-blue-500">
      {{ release.platform }} • x86_64 • {{ size }} MB
    </p>
  </client-only>
</template>

<script setup lang="ts">
import {
  getLatestRelease,
  type LatestReleaseResponse,
} from '@/utils/getLatestRelease'
import { ButtonType, WButton } from 'wit-vue-ui'
import { getBrowserOs } from '@/utils/getBrowserOs'
import { URL_RELEASE_BASE } from '@/constants'
import { computed, type Ref } from 'vue'

const primaryActionLocalePath = computed(() => {
  return release.value
    ? 'coin.run_in_platform.main-alt'
    : 'coin.run_in_platform.main-mobile'
})

const size = computed(() => {
  const size: number | null | undefined = release.value?.size
  return size ? (size / 1024 / 1024).toFixed(1) : ''
})

const primaryActionUrl = computed(() => {
  return release.value
    ? release.value.releaseUrl
    : 'https://docs.witnet.io/node-operators/docker-quick-start-guide'
})

const { data }: { data: Ref<LatestReleaseResponse | undefined> } =
  await useFetch(URL_RELEASE_BASE)

const os = computed(() => getBrowserOs(navigator))

const downloadRelease = computed(() =>
  os.value ? getLatestRelease({ os: os.value, data: data.value }) : null,
)
const release = computed(() => downloadRelease.value)
</script>

<style lang="scss">
.link {
  width: max-content;
  height: auto;
  display: flex;
}
</style>
