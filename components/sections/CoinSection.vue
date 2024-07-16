<template>
  <NuxtLayout
    name="section"
    :frame-classes="'bg-black-950'"
    :content-classes="'grid justify-items-center'"
  >
    <!-- <PalmBlueIcon class="col-start-1 col-span-1 palm"/> -->
    <template #content>
      <div class="flex flex-col items-center">
        <div class="flex justify-center items-center mb-xl flex-col md:flex-row">
          <i18n-t
            keypath="coin.title.main"
            class="title-h2-xl sm:text-7xl lg:text-8xl font-bold text-white-50"
            id="stake"
            tag="h3"
          >
            <span class="text-wit-blue-500">{{ $t('coin.title.mark') }}</span>
          </i18n-t>

          <p class="mx-xl line transform rotate-90 md:transform-none"></p>
          <div class="max-w-md sm:text-center">
            <h4 class="title-h4 text-white-50 mb-md">
              {{ $t('coin.description1') }}
            </h4>
            <p class="text text-white-50">{{ $t('coin.description2') }}</p>
            <p class="text text-white-50">{{ $t('coin.description3') }}</p>
          </div>
        </div>

        <CustomButton :type="ButtonType.dark" class="mb-md">
          <i18n-t
            keypath="coin.run_in_platform.main"
            class="flex flex-row"
            tag="p"
          >
            <span class="ml-[4px]">{{ release.platform }}</span>
          </i18n-t>
        </CustomButton>

        <p class="text-lg text-wit-blue-500">
          {{ release.platform }} • x86_64 • {{ size }} MB ⓘ
        </p>

        <p class="text-large text-white-50 text-center max-w-4xl mb-xl"></p>

        <div class="grid w-max h-max grid-flow-col sm:grid-flow-row gap-lg items-end">
          <div class="grid justify-items-center justify-center gap-sm h-max">
            <DockerIcon class="icon" />
            <p class="text-link-dark">Docker</p>
          </div>

          <div class="grid justify-items-center justify-center gap-sm h-max">
            <WindowsIcon class="icon" />
            <p class="text-link-dark">Windows</p>
          </div>

          <div class="grid justify-items-center justify-center gap-sm h-max">
            <AppleIcon class="icon" />
            <p class="text-link-dark">Apple</p>
          </div>

          <div class="grid justify-items-center justify-center gap-sm h-max">
            <LinuxIcon class="icon" />
            <p class="text-link-dark">Docker</p>
          </div>

          <div class="grid justify-items-center justify-center gap-sm h-max">
            <RaspberryIcon class="icon" />
            <p class="text-link-dark">Raspberry</p>
          </div>
        </div>

        <div class="grid grid-flow-col sm:grid-flow-row gap-md mt-xl">
          <ExplorerLink
            v-for="explorer in explorers"
            class="mb-md 2xl:mr-md"
            shadow-color="blue"
            :key="explorer.title"
            :title="explorer.title"
            :description="explorer.description"
            :url="explorer.url"
          />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

// import { URLS } from '@/constants'
import DockerIcon from '@/assets/svg/docker.svg?component'
import WindowsIcon from '@/assets/svg/windows.svg?component'
import AppleIcon from '@/assets/svg/apple.svg?component'
import LinuxIcon from '@/assets/svg/linux.svg?component'
import RaspberryIcon from '@/assets/svg/raspberry.svg?component'

import { ButtonType } from '~/types'

import { getLatestRelease } from '../../utils/getLatestRelease'

const release = ref({
  platform: '',
  releaseUrl: '',
  size: 0,
})

const size = computed(() => {
  return (release.value.size / 1024 / 1024).toFixed(1)
})

onMounted(async () => {
  const latestRelease = await getLatestRelease(window.navigator)
  release.value = latestRelease
})

// const { t } = useI18n()
type Explorer = {
  title: string
  description: string
  url: string
}

// TODO: add urls
const explorers: Array<Explorer> = [
  {
    title: t('coin.cards.get_started.title'),
    description: t('coin.cards.get_started.description'),
    url: "",
  },
  {
    title: t('coin.cards.tutorials.title'),
    description: t('coin.cards.tutorials.description'),
    url: "",
  },
  {
    title: t('coin.cards.contribute.title'),
    description: t('coin.cards.contribute.description'),
    url: "",
  },
]
</script>

<style scoped lang="scss">
.title-h3 {
  line-height: 1;
}

.line {
  border: 2px solid $blue;
  height: 150px;
}

@media (max-width: 600px) {
  .line {
    height: 200px;
    margin: -60px;
  }
}
</style>
