<script setup>
  import { computed } from 'vue'

  import Entity from './Entity.vue'

  import { possible, actions } from './data.js'

  const { entity } = defineProps(['entity', 'actionSelector'])

  const possibleActions = computed(() =>
    Object.keys(actions)
      .filter(key => possible({subject: entity, action: actions[key]}))
  )
</script>


<template>
  <div class="action">
    <div class="flex-grid">
      <div @click="actionSelector.next()">back</div>
      <Entity :name="entity.name" :traits="entity.traits"></Entity>
      <div
        v-for="name in possibleActions"
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
