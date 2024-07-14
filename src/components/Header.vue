<script setup>
defineProps({
  currentMovieType: String,
  movieTypeChangeHandler: Function
})

import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const typesMovie = [
  {id: 1, name: 'movie', displayName: 'Фильмы'},
  {id: 2, name: 'cartoon', displayName: 'Мультфильмы'},
  {id: 3, name: 'tv-series', displayName: 'Сериалы'},
  {id: 4, name: 'anime', displayName: 'Аниме'},
]
</script>

<template>
<header class="flex justify-between items-center px-6 text-white select-none">
  <h1 class="header-logo text-4xl uppercase font-impact tracking-wide
             cursor-pointer font-bold">mfilms</h1>
  <div class="menu-block hidden xl:flex text-start *:text-base *:py-3 *:px-8 *:cursor-pointer">
    <div class="menu-item"
         v-for="type in typesMovie"
         :key="type.id"
         @click="movieTypeChangeHandler(type.name)"
         :class="currentMovieType === type.name ? 'active' : ''"
    >
      <h5 class="menu-name">{{ type.displayName }}</h5>
    </div>
  </div>
  <ThemeSwitcher />

</header>
</template>

<style scoped>
header {background: var(--header-color)}
.menu-item.active {background: #4D4D4D}
</style>