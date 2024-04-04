<script setup>
  import TraitList from './TraitList.vue'

  defineProps(['name', 'traits'])
</script>


<template>
  <div>
    <h1> {{ name }} </h1>
    <TraitList :traits="traits"></TraitList>
  </div>
</template>


<style scoped>
div {

}
</style>
