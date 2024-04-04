<script setup>
  import TraitList from './TraitList.vue'

  defineProps(['name', 'traits'])
</script>


<template>
  <div>
    <h1> {{ name }} </h1>
    <Traits :traits="traits"></Traits>
  </div>
</template>


<style scoped>
div {

}
</style>
