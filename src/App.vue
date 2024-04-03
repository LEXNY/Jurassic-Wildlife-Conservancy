<script setup>
  import Entity from './Entity.vue'
  import { sets, actions } from './data.js'
</script>


<template>
  <!-- TODO `Set` -->
  <div v-for="{name, traits, entities} in sets">
    <Entity
      v-for="{name, traits} in entities"
      :name="name"
      :traits="traits"
    ></Entity>
  </div>
</template>


<style scoped>
</style>
