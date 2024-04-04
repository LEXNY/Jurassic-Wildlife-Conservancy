<script setup>
  import { ref } from 'vue'

  import Set from './Set.vue'
  import Entity from './Entity.vue'

  import { sets, actions } from './data.js'

  const selected = ref()
</script>


<template>
  <Set
    v-for="{name, traits, entities} in sets"
    :name="name" :traits="traits" :entities="entities" :selected="selected"
  ></Set>

  <!-- TODO: action bar -->
  <Entity v-if="selected" :name="selected.name" :traits="selected.traits"></Entity>
</template>


<style scoped>
</style>
