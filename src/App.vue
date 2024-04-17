<script setup>
  import { reactive } from 'vue'

  import Set from './Set.vue'
  import Entity from './Entity.vue'
  import ActionBar from './ActionBar.vue'

  import { sets, actions, possible, perform } from './data.js'

  const actionSelection = reactive({subject: null, action: null})
  const actionSelector = (function* () {
    while(true) {
      // null rewinds, values are emplaced
      const backOrNext = yield

      // steps are in reverse order in code from chronological.
      if(actionSelection.action) {
        if(backOrNext) {
          // typecheck we're applying an action to an entity
          if(backOrNext.traits) {
            perform({action: actionSelection.action, object: backOrNext})

            // find a dinosaur and attempt to react to human action
            const entities = sets.flatMap(({entities}) => entities)
            const subject = entities.find(e => e.traits.find(t => t==="dinosaur"))
            const action = actions.slash
            const object = actionSelection.subject
            if(possible({subject, action})) { perform({action, object}) }

            // clear when done
            Object.assign(actionSelection, {subject: null, action: null})
          }
        } else {
          actionSelection.action = null
        }
      } else if(actionSelection.subject && backOrNext) {
        // typecheck and do nothing if not a verb
        if(backOrNext.apply) { actionSelection.action = backOrNext }
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
    :entity="actionSelection.subject"
    :actionSelector="actionSelector"
  ></ActionBar>
</template>
