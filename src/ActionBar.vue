<script setup>
  import Entity from './Entity.vue'

  defineProps(['entity', 'actions', 'actionSelector'])

// TODO: only show applicable actions
</script>


<template>
  <div class="action">
    <div class="flex-grid">
      <Entity :entity="entity></Entity>
      <div
        v-for="name in Object.keys(actions)"
        @click="actionSelector.next(actions[name])"
        class="col"
      >
        {{name}}
      </div>
    </div>
  </div>
</template>


<style scoped>
.action {
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
