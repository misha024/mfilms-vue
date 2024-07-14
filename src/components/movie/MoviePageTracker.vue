<script setup>
defineProps({
  'currentPage': Number,
  'totalPages': Number
})
</script>

<template>
<div class="page-tracker-container flex items-center justify-center
            p-2 text-white fixed bottom-0 w-full">
  <span class="text-xs">
    Страница
    {{ currentPage }}
    /
    {{ totalPages }}
  </span>
</div>
</template>

<style scoped>
.page-tracker-container {background: var(--body-secondary-color)}
</style>