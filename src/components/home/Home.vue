<template>
  <v-app>
     <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
     <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar" :isVariant="opene" @toggle-variant="toggleVariant"/>
    <v-content>
 
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      :clipped="clipped"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; Bl@ckSheep 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

import AppSidebar from './app-sidebar/AppSidebar'
import AppNavbar from './app-navbar/AppNavbar'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components:{
    AppSidebar,
    AppNavbar
  }
    ,
  data () {
    return {
    
      clipped: true,
      fixed: false,
      right: true,
      rightDrawer: false,
      opened: true,
      opene:false
    
    }
  },methods: {
      toggleSidebar (opened) {
        this.opened = opened
      },
      toggleVariant (opened) {
        this.opene = opened
      }
    },
    computed: {
      ...mapGetters([
        'isLoading'
      ])
    }
}
</script>
