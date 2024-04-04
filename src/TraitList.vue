<script setup>
  defineProps(['traits'])
</script>


<template>
  <span v-for="trait in traits">
    {{ trait }} &nbsp
  </span>
</template>


<style>
  span {
    background-color: red;
  }
</style>
