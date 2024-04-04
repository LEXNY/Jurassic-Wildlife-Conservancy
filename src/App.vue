<script setup>
  import { reactive } from 'vue'

  import Set from './Set.vue'
  import Entity from './Entity.vue'

  import { sets, actions } from './data.js'

  // TODO: change this into `const action = ({subject: null, verb: null, object: null})`
  const selected = reactive({})
</script>


<template>
  <Set
    v-for="{name, traits, entities} in sets"
    :name="name" :traits="traits" :entities="entities" :selected="selected"
  ></Set>

  <!-- TODO: action bar -->
  <Entity
    v-if="selected.value"
    :name="selected.value.name"
    :traits="selected.value.traits"
  ></Entity>
</template>


<style scoped>
</style>
