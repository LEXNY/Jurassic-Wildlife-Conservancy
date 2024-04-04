<script setup>
  import TraitList from './TraitList.vue'
  import Entity from './Entity.vue'

  defineProps(['name', 'traits', 'entities', 'selected'])
</script>


<template>
  <div>
    <h1> {{ name }} </h1>
    <TraitList :traits="traits"></TraitList>
    <Entity
      v-for="entity in entities"
      :name="entity.name"
      :traits="entity.traits"
      @click="selected.value = entity"
    ></Entity>
  </div>
</template>


<style scoped>
div {

}
</style>
