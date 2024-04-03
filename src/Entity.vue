<script setup>
  defineProps(['name', 'traits'])
</script>


<template>
  <div>
    <h1> {{ name }} </h1>
    <span v-for="trait in traits">
      {{ trait }} &nbsp
    </span>
  </div>
</template>


<style scoped>
div {

}

ul {}

span {}
</style>
