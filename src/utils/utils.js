const movieCardLength = 200
const gapMovieContainer = 32

export const calculateTotalMoviesOnScreen = screenWidth => {
  const moviePerRow = Math.floor(screenWidth / (movieCardLength + gapMovieContainer))
  return moviePerRow * Math.ceil(screenWidth / movieCardLength)
}