TODO: this is an example, but just use:
//           <select size=3 v-model="selected">







<script>
// TODO: defineProps
// accept `selectedItem` as a ref prop.


      selectedItem: null,
      items: [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
      ],

    selectItem(item) {
      this.selectedItem = item;
    },
</script>


<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.name" @click="selectItem(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>


<style scoped>
div {

}

ul {}

span {}
</style>

