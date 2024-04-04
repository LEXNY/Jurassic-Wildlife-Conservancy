<script setup>
  defineProps(['traits'])
</script>


<template>
  <span v-for="trait in traits">
    {{ trait }}
  </span>
</template>


<style>
  span {
    background-color: #440000;
    margin-right: 10px;
    padding: 1px;
  }
</style>
