<script setup>
  import { ref } from 'vue'

  import Entity from './Entity.vue'
  import { sets, actions } from './data.js'

  const selected = ref()
</script>


<template>
  <div class="set"
    v-for="{name, traits, entities} in sets"
    :name="name" :traits="traits"
  >
    <Entity
      v-for="entity in entities"
      :name="entity.name"
      :traits="entity.traits"
      @click="selected = entity"
    ></Entity>
  </div>

  <!-- TODO: action bar -->
  <Entity v-if="selected" :name="selected.name" :traits="selected.traits"></Entity>
</template>


<style scoped>
</style>
