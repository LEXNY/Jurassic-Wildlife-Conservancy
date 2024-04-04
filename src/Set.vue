<script setup>
  import TraitList from './TraitList.vue'
  import Entity from './Entity.vue'

  defineProps(['name', 'traits', 'entities', 'selected'])
</script>


<template>
  <div class="set">
    <h1> {{ name }} </h1>
    <TraitList :traits="traits"></TraitList>
    <div class="flex-grid">
      <Entity
        v-for="entity in entities"
        :name="entity.name"
        :traits="entity.traits"
        @click="selected.value = entity"
        class="col"
      ></Entity>
    </div>
  </div>
</template>


<style scoped>
.set {
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 5px;
  background-color: black;
}

.flex-grid {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex: 1;
  min-width: 40%;
  max-width: 40%;
  border: 1px solid #ddd;
  padding: 1rem;
}
</style>
