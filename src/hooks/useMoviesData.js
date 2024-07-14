import { getMoviesAPI } from '@/api.js'
import { onMounted, provide, reactive, ref, watch } from 'vue'
import { calculateTotalMoviesOnScreen } from '@/utils/utils.js'

export default function useMoviesData() {
  const moviesData = ref([])

  const movieCurrentPage = reactive({ 'value': 1 })
  const movieTotalPages = ref(0)
  const movieOnScreen = ref(25)

  const movieType = ref('movie')
  const movieSortedParams = reactive({ 'genres': null, 'sort': undefined, 'sortType': false })

  const statusLoading = ref(false)

  const defineMovieOnScreen = () => movieOnScreen.value = calculateTotalMoviesOnScreen(window.innerWidth)

  const movieTypeChangeHandler = newMovieType => movieType.value = newMovieType

  // changed movie type
  watch(movieType, async () => {
    defineMovieOnScreen();
    statusLoading.value = true
    moviesData.value = []
    movieCurrentPage.value = 1
    await getMoviesAPI(movieType.value, movieCurrentPage.value, movieOnScreen.value, movieSortedParams).then(movies => {
      moviesData.value = movies.docs
      movieTotalPages.value = movies['pages']
    })
    statusLoading.value = false
  })

  // scroll loading
  onMounted(() => {
    setTimeout(() => window.addEventListener('scroll', () => {
      if (movieTotalPages.value === movieCurrentPage.value) return;
      const doc = document.documentElement
      const isScrollEnd = (doc.scrollHeight - doc.scrollTop) <= doc.clientHeight
      isScrollEnd && console.warn("SCROLL DEBUG: page increment; current page -", movieCurrentPage.value)
      isScrollEnd && movieCurrentPage.value++
    }), 3000)
  });

  watch(movieCurrentPage, async (newValue) => {
    statusLoading.value = true
    defineMovieOnScreen();
    await getMoviesAPI(movieType.value, newValue.value, movieOnScreen.value, movieSortedParams).then(movies => {
      moviesData.value.push(...movies.docs)
      movieTotalPages.value = movies['pages']
    })
    statusLoading.value = false
  })


  watch(movieSortedParams, async () => {
    statusLoading.value = true
    defineMovieOnScreen();
    movieCurrentPage.value = 1
    moviesData.value = []
    await getMoviesAPI(movieType.value, movieCurrentPage.value, movieOnScreen.value, movieSortedParams).then(movies => {
      moviesData.value = movies.docs
      movieTotalPages.value = movies['pages']
    })
    statusLoading.value = false
  }, { immediate: true })

  return {
    movieType,
    moviesData,
    movieCurrentPage,
    movieTotalPages,
    movieSortedParams,
    movieTypeChangeHandler
  }
}