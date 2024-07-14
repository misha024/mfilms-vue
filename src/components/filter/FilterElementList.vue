<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'

defineProps({
  'elements': Object,
  'selectElement': String,
  'callback': Function,
  "sortType": Boolean
})
</script>

<template>
  <ul class="filter-block px-6 py-4 list-disc	list-inside
             flex flex-col gap-1.5 min-w-max *:flex *:items-center *:gap-2">
    <li class=""
        v-for="element in elements"
        :key="element.id"
        :class="element.value === selectElement && 'active'"
        @click="callback(element.value)"
    >
      {{ element.name }}
      <font-awesome-icon :icon="sortType ? faArrowDown : faArrowUp" size="xs"
                         v-if="sortType !== null && element.value === selectElement"
      />
    </li>
  </ul>
</template>

<style scoped>
.filter-block {background: var(--child-background)}

ul.filter-block li {
  white-space: nowrap;
  cursor: pointer;
}
ul.filter-block li:hover {text-decoration: underline}
ul.filter-block li.active {color: white}
</style>