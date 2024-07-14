export const getRatingMovie = totalRating => {
  const rating = totalRating / 2
  const fullStars = Math.floor(rating)
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = Math.floor(5 - fullStars - halfStars)
  return {
    initial: totalRating,
    fullStars: fullStars,
    halfStars: halfStars,
    emptyStars: emptyStars
  }
}
