<script setup>
import { defineProps } from 'vue';
import { getRatingMovie } from '@/utils/ratingUtils.js';

const props = defineProps({
  movie: Object
});

const movieRating = getRatingMovie(props.movie['rating']['kp'])
</script>

<template>
  <div class="movie-card relative cursor-pointer">
    <div class="hidden-movie-info absolute top-1/2 left-1/2
                flex flex-col justify-center items-center gap-3
                text-white w-full h-full p-2.5 text-center">
      <h2 class="movie-title text-xl font-inter font-semibold">{{ movie['name'] }}</h2>
      <h5 class="movie-description text-xs font-inter font-semibold">{{ movie['shortDescription'] }}</h5>
      <h6 class="movie-year text-xs text-slate-400 absolute top-0 right-0 m-3">{{ movie['year'] }}</h6>
      <div class="rating-block flex mb-5 bottom-0 absolute" :title="movieRating.initial">
        <img v-for="n in movieRating.fullStars" :key="`full-star-${n}`" src="/src/assets/movieRating/1.png">
        <img v-for="n in movieRating.halfStars" :key="`half-star-${n}`" src="/src/assets/movieRating/0.5.png">
        <img v-for="n in movieRating.emptyStars" :key="`empty-star-${n}`" src="/src/assets/movieRating/0.png">
      </div>
      <span class="movie-genre text-xs text-slate-400 whitespace-pre-wrap	">{{ movie['genres'].map(genre => genre.name).join(", ") }}</span>
    </div>
    <img class="movie-img w-full h-full" :src="movie['poster']['previewUrl']">
  </div>
</template>

<style scoped>
@import '@fontsource/inter';

.movie-card {
  width: 200px;
  height: 290px;
}

.hidden-movie-info {
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  transition: opacity 0.4s, background-color 0.4s;
  opacity: 0;
}

.movie-card:hover .hidden-movie-info {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7); /* При наведении делаем фон блока непрозрачным */
}
</style>