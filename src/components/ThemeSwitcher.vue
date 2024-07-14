<script setup>
import { ref, watch } from 'vue'

const globalThemes = [
  {
    '--body-color': '#333333',
    '--body-ligher-color': '#444444',
    '--child-background': '#555555',
    '--body-secondary-color': '#666666',
    '--header-color': '#222222'
  },
  {
    '--body-color': '#330000',
    '--body-ligher-color': '#440000',
    '--child-background': '#550000',
    '--body-secondary-color': '#660000',
    '--header-color': '#220000'
  },
  {
    '--body-color': '#332200',
    '--body-ligher-color': '#443300',
    '--child-background': '#553300',
    '--body-secondary-color': '#663300',
    '--header-color': '#221100'
  },
  {
    '--body-color': '#333300',
    '--body-ligher-color': '#444400',
    '--child-background': '#555500',
    '--body-secondary-color': '#666600',
    '--header-color': '#222200'
  },
  {
    '--body-color': '#003300',
    '--body-ligher-color': '#004400',
    '--child-background': '#005500',
    '--body-secondary-color': '#006600',
    '--header-color': '#002200'
  },
  {
    '--body-color': '#002233',
    '--body-ligher-color': '#003344',
    '--child-background': '#004455',
    '--body-secondary-color': '#005566',
    '--header-color': '#001122'
  },
  {
    '--body-color': '#330033',
    '--body-ligher-color': '#440044',
    '--child-background': '#550055',
    '--body-secondary-color': '#660066',
    '--header-color': '#220022'
  },
  {
    '--body-color': '#332211',
    '--body-ligher-color': '#443322',
    '--child-background': '#553322',
    '--body-secondary-color': '#663322',
    '--header-color': '#221111'
  },
  {
    '--body-color': '#333333',
    '--body-ligher-color': '#444444',
    '--child-background': '#555555',
    '--body-secondary-color': '#666666',
    '--header-color': '#222222'
  },
]
const currentTheme = ref(0) // index

watch(() => currentTheme.value, () => {
  const theme = globalThemes[currentTheme.value]
  document.documentElement.style.setProperty("--body-color", theme['--body-color'])
  document.documentElement.style.setProperty("--body-ligher-color", theme['--body-ligher-color'])
  document.documentElement.style.setProperty("--child-background", theme['--child-background'])
  document.documentElement.style.setProperty("--body-secondary-color", theme['--body-secondary-color'])
  document.documentElement.style.setProperty("--header-color", theme['--header-color'])
})

const handleSwitch = () => {
  currentTheme.value++;
  if (currentTheme.value === globalThemes.length) currentTheme.value=0;
}
</script>

<template>
  <img src="/icon-theme-change.png"
       class="open-theme-change cursor-pointer w-6"
       alt="theme-swithcer"
       @click="handleSwitch"
  >
</template>

<style scoped>

</style>