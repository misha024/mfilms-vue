<script setup>
import { toRef, watch } from 'vue'
import FilterElementList from '@/components/filter/FilterElementList.vue'

const props = defineProps({
  'moviesData': Array,
  'sortedParams': Object
})

const localSortedParams = toRef(props, 'sortedParams');
const genresSwitchHandler = value => localSortedParams.value['genres'] = value;
const sortSwitchHandler = value => {
  localSortedParams.value['sort'] = value
  localSortedParams.value['sortType'] = !localSortedParams.value['sortType']
}

const genreMovies = [
  { name: 'Все', value: null },
  { name: 'Ужасы', value: 'ужасы' },
  { name: 'Драма', value: 'драма' },
  { name: 'Боевик', value: 'боевик' },
  { name: 'Фэнтези', value: 'фэнтези' },
  { name: 'Вестерн', value: 'вестерн' },
  { name: 'Триллер', value: 'триллер' },
  { name: 'Комедия', value: 'комедия' },
  { name: 'История', value: 'история' },
  { name: 'Военный', value: 'военный' },
  { name: 'Детектив', value: 'детектив' },
  { name: 'Криминал', value: 'криминал' },
  { name: 'Биография', value: 'биография' },
  { name: 'Мелодрама', value: 'мелодрама' },
  { name: 'Фантастика', value: 'фантастика' },
  { name: 'Приключения', value: 'приключения' },
];
const sortingMovies = [
  { name: 'По рейтингу', value: 'rating.kp' },
  { name: 'Дата съемки', value: 'releaseYears.start' },
  { name: 'По дате выхода', value: 'year' },
  { name: 'По популярности', value: 'audience.count' }
];
</script>

<template>
<div class="movie-filters text-xs h-screen flex flex-col gap-6 pb-6 sticky top-0
            text-stone-300 p-4 overflow-y-auto min-w-max">

  <FilterElementList
    v-model:callback="genresSwitchHandler"
    :elements="genreMovies"
    :selectElement="sortedParams['genres']"
    :sortType="null"
  />

  <FilterElementList
    v-model:callback="sortSwitchHandler"
    :elements="sortingMovies"
    :selectElement="sortedParams['sort']"
    :sortType="sortedParams['sortType']"
  />

</div>
</template>

<style scoped>
.movie-filters {background: var(--body-ligher-color)}
</style>