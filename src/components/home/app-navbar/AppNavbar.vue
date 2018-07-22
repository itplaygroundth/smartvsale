<template>
  <v-toolbar
      app
      :clipped-left="clipped" 
    >
     <header-selector  :isOpen.sync="valueProxy"/>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    
</template>

<script>
 import HeaderSelector from './components/HeaderSelector'
import VariantSelector from './components/VariantSelector'
export default {
    name:'app-nav',
    components:{
      HeaderSelector,
      VariantSelector
    },
     data () {
    return {
     
      clipped: true,
      fixed: false,
      isVariant: false,
      right: true,
      rightDrawer: false,
      title:'SMSale',
      isOpen:true
    }
    },
    computed: {
      valueProxy: {
        get () {
         
          return this.isOpen
        },
        set (opened) {
   
          this.$emit('toggle-menu', opened)
        },
      },
      variantProxy: {
        get () {
          return this.isVariant
        },
        set (opened) {
          this.$emit('toggle-variant', opened)
        },
      },
    },
   
}
</script>

<style>

</style>
