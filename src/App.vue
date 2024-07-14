<script setup>
import './assets/index.css'
import useMoviesData from '@/hooks/useMoviesData.js'
import MainHeader from '@/components/Header.vue'
import MovieCard from '@/components/movie/MovieCard.vue'
import MoviePageTracker from '@/components/movie/MoviePageTracker.vue'
import MovieFilters from '@/components/movie/MovieFilters.vue'
import SearchBlock from '@/components/SearchBlock.vue'

const {
  movieType,
  moviesData,
  movieTotalPages,
  movieCurrentPage,
  movieSortedParams,
  movieTypeChangeHandler
} = useMoviesData()
</script>

<template>
  <MainHeader :currentMovieType="movieType"
              :movieTypeChangeHandler="movieTypeChangeHandler" />
  <main class="main-container flex h-full">
    <div class="movie-catalog w-full">
      <SearchBlock />
      <div class="movie-container m-8 mb-12 flex flex-wrap gap-8">
        <MovieCard
          v-for="movie in moviesData"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <MoviePageTracker
        :current-page="movieCurrentPage.value"
        :total-pages="movieTotalPages"
      />
    </div>
    <MovieFilters
      :moviesData="moviesData"
      :sortedParams="movieSortedParams"
    />
  </main>
</template>

<style scoped>
</style>
