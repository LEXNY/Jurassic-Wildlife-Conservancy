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
  background-color: #333333;
  margin: 5px;
  padding: 10px;
}
</style>
