<template>
   <v-toolbar-side-icon @click.stop="$emit('update:isOpen',isOpen=!isOpen)"></v-toolbar-side-icon>
   
</template>

<script>
  export default {
    name: 'header-selector',
    data() {
      return {  isOpen:true}
    }
    // props: {
    //   isOpen: {
    //     type: Boolean
    //   },
    // }
  }
</script>

