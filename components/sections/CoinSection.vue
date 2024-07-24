<template>
  <NuxtLayout
    id="stake"
    name="section"
    :frame-classes="'bg-black-950'"
    :content-classes="'grid justify-items-center pt-[240px]'"
  >
    <template #top>
      <BlueStarIcon class="w-auto h-[200px]" />
    </template>
    <template #content>
      <div class="flex flex-col items-center gap-md">
        <div
          class="flex justify-center items-center mb-xl flex-row md:flex-col sm:flex-col"
        >
          <i18n-t
            keypath="coin.title.main"
            class="title-h2-xl sm:text-7xl lg:text-8xl font-bold text-white-50"
            tag="h3"
            scope="global"
          >
            <span class="text-wit-blue-500">{{ $t('coin.title.mark') }}</span>
          </i18n-t>

          <p class="mx-xl line transform md:rotate-90 sm:rotate-90"></p>
          <div class="max-w-md md:text-center">
            <i18n-t
              keypath="coin.description1-alt"
              class="title-h4 text-white-50 mb-md"
              tag="h4"
              scope="global"
            >
              <br />
              <span>{{ $t('coin.description1-1-alt') }}</span>
            </i18n-t>
            <p class="text text-white-50">{{ $t('coin.description2-alt') }}</p>
            <p class="text text-white-50">{{ $t('coin.description3') }}</p>
          </div>
        </div>
        <client-only>
          <CustomButton :type="ButtonType.dark">
            <a :href="release.releaseUrl" target="_blank">
              <i18n-t
                keypath="coin.run_in_platform.main-alt"
                tag="p"
                scope="global"
              >
                <span class="ml-[4px]">{{ release.platform }}</span>
              </i18n-t>
            </a>
          </CustomButton>
        </client-only>
        <p class="text text-wit-blue-500 mt-md">
          {{ release.platform }} • x86_64 • {{ size }} MB
          <span class="text-xs ml-xs">ⓘ</span>
          <!-- In case the info icon is works as a tooltip, set content and uncomment the component -->
          <!-- <TooltipBase
            bg-color="bg-white-50"
            text-color="text-black-950"
            tooltip-text="Lorenipsum dsesrwersedre"
          >
          <span class="text-xs ml-xs">ⓘ</span>
        </TooltipBase> -->
        </p>

        <p
          class="text-large text-white-50 text-center section-description-max-w mb-xl"
        >
          {{ t('coin.participate-alt-1') }}
          <!--TODO: uncomment when public testnet is live
          {{ t('coin.participate2') }}
          TODO: uncomment when wit/2 is live
          {{ t('coin.participate') }} -->
        </p>

        <div
          class="grid w-max h-max grid-flow-col sm:grid-flow-row gap-lg items-end"
        >
          <a
            :href="URLS.docker_node"
            target="_blank"
            class="grid justify-items-center justify-center gap-sm h-max cursor-pointer"
          >
            <DockerIcon class="icon" />
            <p class="text-link-dark">Docker</p>
          </a>

          <a
            :href="URLS.windows_node"
            target="_blank"
            class="grid justify-items-center justify-center gap-sm h-max cursor-pointer"
          >
            <WindowsIcon class="icon" />
            <p class="text-link-dark">Windows</p>
          </a>

          <a
            :href="URLS.macos_node"
            target="_blank"
            class="grid justify-items-center justify-center gap-sm h-max cursor-pointer"
          >
            <AppleIcon class="icon" />
            <p class="text-link-dark">Apple</p>
          </a>

          <a
            :href="URLS.linux_node"
            target="_blank"
            class="grid justify-items-center justify-center gap-sm h-max cursor-pointer"
          >
            <LinuxIcon class="icon" />
            <p class="text-link-dark">Linux</p>
          </a>

          <a
            :href="URLS.rasberrypi_node"
            target="_blank"
            class="grid justify-items-center justify-center gap-sm h-max cursor-pointer"
          >
            <RaspberryIcon class="icon" />
            <p class="text-link-dark">Raspberry</p>
          </a>
        </div>
        <!-- TODO: uncomment when wit/2 is live
        <div class="grid grid-flow-col md:grid-flow-row gap-md mt-xl">
          <ExplorerLink
            v-for="explorer in explorers"
            :key="explorer.title"
            class="mb-md 2xl:mr-md"
            shadow-color="blue"
            :title="explorer.title"
            :description="explorer.description"
            :url="explorer.url"
          >
            <template #description>
              <i18n-t
                :keypath="explorer.description"
                tag="p"
                class="text-sm text-black-950"
                scope="global"
              >
                <span
                  v-for="text in explorer.highlightedText"
                  :key="text"
                  class="text-black-950 font-[700]"
                >
                  {{ t(text) }}
                </span>
              </i18n-t>
            </template>
          </ExplorerLink>
        </div> -->
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { URLS } from '@/constants'
import { getLatestRelease } from '../../utils/getLatestRelease'
import DockerIcon from '@/assets/svg/docker.svg?component'
import WindowsIcon from '@/assets/svg/windows.svg?component'
import AppleIcon from '@/assets/svg/apple.svg?component'
import LinuxIcon from '@/assets/svg/linux.svg?component'
import RaspberryIcon from '@/assets/svg/raspberry.svg?component'
import BlueStarIcon from '@/assets/svg/blue-horizontal-star.svg?component'

import { URLS } from '@/constants'
import { ButtonType } from '~/types'

const { t } = useI18n()

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
// TODO uncomment when wit/2 is live
// type Card = {
//   title: string
//   description: string
//   url: string
//   highlightedText: string[]
// }

// TODO: add urls
// const cards: Array<Card> = [
//   {
//     title: t('coin.cards.get_started.title'),
//     description: 'coin.cards.get_started.description',
//     highlightedText: ['coin.cards.get_started.boldText1'],
//     url: URLS.get_started,
//   },
//   {
//     title: t('coin.cards.tutorials.title'),
//     description: 'coin.cards.tutorials.description',
//     highlightedText: ['coin.cards.tutorials.boldText1'],
//     url: URLS.tutorials,
//   },
//   {
//     title: t('coin.cards.contribute.title'),
//     description: 'coin.cards.contribute.description',
//     highlightedText: ['coin.cards.contribute.boldText1'],
//     url: URLS.github_contribute,
//   },
// ]
</script>

<style scoped lang="scss">
.icon {
  width: auto;
  height: 48px;
}
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
