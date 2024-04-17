<script setup>
  import { reactive } from 'vue'

  import Set from './Set.vue'
  import Entity from './Entity.vue'

  import { sets, actions, possible, perform } from './data.js'


  const actionSelection = reactive({subject: null, verb: null, object: null})
  const actionSelector = (function* () {
    while(true) {
      // null rewinds, values are emplaced
      const backOrNext = yield

      // steps are in reverse order in code from chronological.
      if(actionSelection.object) {
        perform(actionSelection)
        // find a dinosaur and attempt to react to human action
                 // TODO: entities isn't right for the structure
        const subject = entities.find(e => e.traits.find(t => t==="dinosaur"))
        const action = actions.slash
        // TODO: const object = entities.find human near dinosaur
        if(possible({subject, action})) { perform({action, object}) }
      } else if(actionSelection.verb) {
        if(backOrNext) { actionSelection.object = backOrNext }
        else           { actionSelection.verb   = null }
      } else if(actionSelection.subject && backOrNext) {
        // TODO: typecheck verb and do nothing if not a verb
        actionSelection.verb = backOrNext
      } else {
        actionSelection.subject = backOrNext
      }
    }
  })()
  actionSelector.next()
</script>


<template>
  <Set
    v-for="{name, traits, entities} in sets"
    :name="name" :traits="traits" :entities="entities" :actionSelector="actionSelector"
  ></Set>

  <ActionBar
    v-if="actionSelection.subject"
    :actions="actions"
    :entity="actionSelection.subject"
    :actionSelector="actionSelector"
  ></ActionBar>
</template>
