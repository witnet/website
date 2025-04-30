<template>
  <div class="h-max">
    <WSection
      content-classes="[&&]:p-[100px_0px] [&&]:sm:p-[100px_24px] [&&]:md:p-[100px_80px]"
    >
      <template #content>
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
              <div class="flex gap-md sm:justify-center">
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
                  class="w-[300px]"
                >
                  <template #icon>
                    <div class="grid text-center">
                      <p class="text-black-950 text-lg font-bold">
                        {{ event.date.slice(8, 10) }}
                      </p>
                      <p class="text-black-950 text-lg font-bold">
                        {{ months[parseInt(event.date.slice(5, 7))] }}
                      </p>
                    </div>
                  </template>
                  <template #header
                    ><div class="grid">
                      <img
                        :src="event.bannerImage"
                        class="w-[200px] h-auto justify-self-center"
                      />
                      <h3 class="text-2xl text-black-950 font-semibold my-sm">
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
                <WTable
                  class="border rounded-full"
                  :data="table"
                  :labels="labels"
                  :long="true"
                />
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
const months = ref([
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
])
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

const labels: Ref<Array<Label>> = ref([
  {
    sortType: Sort.alphabetically,
    label: 'Title',
    index: 0,
  },
  {
    sortType: Sort.alphabetically,
    label: 'Description',
    index: 1,
  },
  {
    label: 'Tags',
    index: 2,
  },
  {
    label: 'Labels',
    index: 3,
  },
  {
    sortType: 2,
    label: 'Date',
    index: 4,
  },
  {
    label: 'Link',
    index: 5,
  },
])

const getData = async () => {
  const { data: events } = await useFetch(
    config.public.calendarApiUrl as string,
  )
  return events.value as Response
}

const responseData: Ref<Response | null> = ref(null)

onMounted(() => {
  nextTick(async () => {
    responseData.value = await getData()
  })
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
    valueToCol(event.title, labels.value[0].label),
    valueToCol(event.description, labels.value[1].label),
    valueToCol(
      event.tags.map((tag): Chip => {
        return {
          label: tag,
          color:
            setTagsAndLabelsColor[tag.toLocaleLowerCase()] ?? 'bg-black-950',
        }
      }),
      labels.value[2].label,
    ),
    valueToCol(
      event.labels.map((tag): Chip => {
        return {
          label: tag,
          color:
            setTagsAndLabelsColor[tag.toLocaleLowerCase()] ?? 'bg-black-950',
        }
      }),
      labels.value[3].label,
    ),
    valueToCol(event.date.slice(0, 10), labels.value[4].label),
    valueToCol(event.actionText, labels.value[5].label, event.url),
  ])
}
const eventsList: Ref<Event[]> = computed(() => {
  if (responseData.value && responseData.value.success) {
    return responseData.value.data
  }
  return []
})
const upcomingEvents: Ref<Event[]> = computed(() => {
  const allEvents = eventsList.value
  return filterDataByGroup(
    filterDataByEventType(
      allEvents.sort((eventA: Event, eventB: Event) => {
        return Date.parse(eventA.date) - Date.parse(eventB.date)
      }),
    ),
    EventsGroup.upcoming,
  )
})
const pastEvents: Ref<Event[]> = computed(() => {
  const upcomingEvents = eventsList.value
  return filterDataByGroup(
    filterDataByEventType(
      upcomingEvents.sort((eventA: Event, eventB: Event) => {
        return Date.parse(eventB.date) - Date.parse(eventA.date)
      }),
    ),
    EventsGroup.past,
  )
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

@media (max-width: 600px) {
  .line {
    height: 200px;
    margin: -60px;
  }
}
</style>
