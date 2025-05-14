<template>
  <div class="h-max">
    <WSection
      content-classes="[&&]:p-[100px_0px] [&&]:sm:p-[100px_24px] [&&]:md:p-[100px_80px]"
    >
      <template #content>
        <div>
          {{ events }}
        </div>
        <div>{{ error }}</div>
        <div class="flex flex-col items-center gap-md">
          <div
            class="flex justify-center items-center mb-xl flex-row md:flex-col sm:flex-col"
          >
            <h3
              class="title-h2-xl sm:text-7xl lg:text-8xl font-bold text-black-950"
            >
              {{ t('calendar.title') }}
            </h3>

            <p class="mx-xl line transform md:rotate-90 sm:rotate-90" />
            <div class="max-w-md md:text-center">
              <h4 class="title-h4 text-black-950 mb-md">
                {{ t('calendar.description-title') }}
              </h4>
              <p class="text text-black-950">{{ t('calendar.description') }}</p>
              <div class="flex gap-md sm:justify-center pt-sm">
                <button
                  v-for="tag in tags"
                  :key="tag"
                  :class="
                    currentTag === tag
                      ? 'bg-white-50 border-2 border-black-950 text text-black-950'
                      : 'bg-white-950 text-white-50'
                  "
                  class="rounded-full px-sm mt-sm"
                  @click="filterBy(tag)"
                >
                  {{ tag }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ClientOnly>
          <div class="grid gap-3xl">
            <div class="grid justify-center gap-lg pb-xl">
              <div
                class="grid grid-cols-[max-content_1fr] gap-md justify-items-start items-center"
              >
                <h3 class="text text-xl">
                  {{ $t('calendar.upcoming-events') }}
                </h3>
                <DashesIcon class="w-[80px] h-auto" />
              </div>
              <div v-if="!responseData" class="flex gap-xl">
                <WLoadingPlaceholder
                  v-for="placeholder in [1, 2, 3]"
                  :key="placeholder"
                  width="300px"
                  height="500px"
                  border-radius="8%"
                />
              </div>
              <div
                class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-max gap-y-xl"
              >
                <WCard
                  v-for="event in upcomingEvents"
                  :key="event.title"
                  :type="CardType.Icon"
                  :url="event.url"
                  :url-label="event.actionText"
                  class="card"
                >
                  <template #icon>
                    <div class="grid text-center">
                      <p class="text-black-950 text-lg font-bold">
                        {{ event.date.slice(8, 10) }}
                      </p>
                      <p class="text-black-950 text-lg font-bold">
                        {{ months[parseInt(event.date.slice(5, 7)) - 1] }}
                      </p>
                    </div>
                  </template>
                  <template #header
                    ><div class="grid">
                      <img
                        :src="event.bannerImage"
                        class="w-[200px] h-auto justify-self-center"
                      />
                      <h3
                        class="text-2xl text-black-950 font-semibold my-sm mt-md"
                      >
                        {{ event.title }}
                      </h3>
                    </div></template
                  ><template #description
                    ><div class="-mb-lg">
                      <p class="text">
                        {{ event.description }}
                      </p>
                      <p class="text align flex gap-sm">
                        <span
                          v-for="tag in event.tags"
                          :key="tag"
                          class="text-wit-blue-500 inline"
                          >#{{ tag }}</span
                        >
                      </p>
                    </div></template
                  >
                </WCard>
              </div>
            </div>
            <div v-if="pastEvents.length" class="grid gap-lg">
              <div
                class="grid grid-cols-[max-content_1fr] gap-md justify-items-start items-center"
              >
                <h3 class="text text-xl">{{ $t('calendar.past-events') }}</h3>
                <DashesIcon class="w-[80px] h-auto" />
              </div>
              <div class="overflow-x-auto">
                <WTable :data="table" :labels="labels" :long="true" />
              </div>
            </div>
          </div>
        </ClientOnly>
      </template>
    </WSection>
    <NewsletterSection />
  </div>
</template>

<script lang="ts" setup>
import {
  Sort,
  WSection,
  WCard,
  WTable,
  type Column,
  type Row,
  type Label,
  type Chip,
  CardType,
  WLoadingPlaceholder,
} from 'wit-vue-ui'
import DashesIcon from '@/assets/svg/dashes-blue.svg?component'
const config = useRuntimeConfig()
const { t } = useI18n()
definePageMeta({
  colorMode: 'light',
})
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]
enum Tag {
  online = 'Online',
  offline = 'Offline',
  all = 'All',
}
const tags = [Tag.all, Tag.online, Tag.offline]
const currentTag = ref(Tag.all)
function filterBy(tag: Tag) {
  currentTag.value = tag
}
type Event = {
  id: string
  title: string
  bannerImage: string
  description: string
  date: string
  url: string
  actionText: string
  labels: string[]
  tags: string[]
  publish: boolean
}
type Response = {
  success: boolean
  data: Event[]
}

const labels: Array<Label> = [
  {
    sortType: Sort.alphabetically,
    break: true,
    label: 'Title',
    index: 0,
  },
  {
    sortType: Sort.alphabetically,
    break: true,
    label: 'Description',
    index: 1,
  },
  {
    label: 'Tags',
    break: false,
    index: 2,
  },
  {
    label: 'Labels',
    break: false,
    index: 3,
  },
  {
    sortType: 2,
    label: 'Date',
    break: false,
    index: 4,
  },
  {
    label: 'Link',
    break: false,
    index: 5,
  },
]

const { data: events, error } = await useFetch(
  config.public.calendarApiUrl as string,
)

console.log('events', events.value)
console.log('error', error.value)
console.log('config', config.public.calendarApiUrl)

const responseData: Ref<Event[]> = computed(() => {
  const response = !error.value ? (events.value as Response) : null
  if (response?.success) {
    return [...response.data]
  } else {
    return []
  }
})

function valueToCol(
  value: string | number | Chip[],
  label: string,
  url?: string,
): Column {
  if (typeof value === 'object') {
    return {
      chips: value,
      label: label,
    }
  } else {
    return {
      value: value,
      label: label,
      url: url,
    }
  }
}
const table = computed(() => {
  return eventsListToTableRows(pastEvents.value)
})
const setTagsAndLabelsColor: Record<string, string> = {
  online: 'bg-wit-blue-600',
  offline: 'bg-black-950',
  defi: 'bg-wit-blue-700',
  gaming: 'bg-gray-800',
}
function eventsListToTableRows(events: Event[]): Row[] {
  return events.map((event: Event) => [
    valueToCol(event.title, labels[0].label),
    valueToCol(event.description, labels[1].label),
    valueToCol(
      event.tags.map((tag): Chip => {
        return {
          label: tag,
          color:
            setTagsAndLabelsColor[tag.toLocaleLowerCase()] ?? 'bg-black-950',
        }
      }),
      labels[2].label,
    ),
    valueToCol(
      event.labels.map((tag): Chip => {
        return {
          label: tag,
          color:
            setTagsAndLabelsColor[tag.toLocaleLowerCase()] ?? 'bg-black-950',
        }
      }),
      labels[3].label,
    ),
    valueToCol(event.date.slice(0, 10), labels[4].label),
    valueToCol(event.actionText, labels[5].label, event.url),
  ])
}

function sortByDate(data: Event[], sortType: Sort) {
  return data.sort((a, b) => {
    const diff = Date.parse(a.date) - Date.parse(b.date)
    return sortType === Sort.ascentant ? diff : -diff
  })
}
const sortedDataAscending = computed(() =>
  sortByDate(responseData.value, Sort.ascentant),
)
const sortedDataDescending = computed(() =>
  sortByDate(responseData.value, Sort.descendant),
)

const upcomingEvents: Ref<Event[]> = computed(() => {
  const filteredDataEventByType = filterDataByEventType(
    sortedDataAscending.value,
  )
  return filterDataByGroup(filteredDataEventByType, EventsGroup.upcoming)
})
const pastEvents: Ref<Event[]> = computed(() => {
  const filteredDataEventByType = filterDataByEventType(
    sortedDataDescending.value,
  )
  return filterDataByGroup(filteredDataEventByType, EventsGroup.past)
})
enum EventsGroup {
  upcoming = 'Upcoming events',
  past = 'Past events',
}
function filterDataByGroup(data: Event[], group: EventsGroup) {
  return data.filter((event: Event) => {
    return group == EventsGroup.upcoming
      ? Date.parse(event.date) > new Date().getTime()
      : Date.parse(event.date) < new Date().getTime()
  })
}
function filterDataByEventType(data: Event[]) {
  if (currentTag.value == Tag.all) {
    return data
  } else {
    return data.filter((event: Event) => {
      return event.labels.includes(currentTag.value.toLowerCase())
    })
  }
}
</script>

<style lang="scss" scoped>
.line {
  border: 2px solid $blue;
  height: 150px;
}

.card {
  width: 300px;
}

@media (max-width: 600px) {
  .line {
    height: 200px;
    margin: -60px;
  }
}
</style>
