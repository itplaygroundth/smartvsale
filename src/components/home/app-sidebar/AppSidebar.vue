<template>
<v-navigation-drawer
     
      :mini-variant="mini"
      :clipped="clipped"
      v-model="isOpen"
      hide-overlay
      fixed
      app
      width="220"
    >
    <v-list dense>
      <v-list-tile avatar tag="div">
                    
                    <v-list-tile-action>
                        <v-btn  icon @click.native.stop="mini = !mini">
                           <v-icon v-html="mini ? 'chevron_right' : 'chevron_left'"></v-icon>
                        </v-btn>
                    </v-list-tile-action>
                      <v-list-tile-content>
            <v-list-tile-title >
              Mini Side
            </v-list-tile-title>
          </v-list-tile-content>
                </v-list-tile>

      <v-list-tile >
        <v-list-tile-action>
        <v-icon>desktop_mac</v-icon>
        </v-list-tile-action>
          <v-list-tile-title>{{ $t('menu.pos') }}</v-list-tile-title>
        </v-list-tile>
      <v-list-group
        prepend-icon="dashboard"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>{{ $t('menu.stockcontrol') }}</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
         
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
            
          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
  
</template>

<script>
import SidebarLink from './components/SidebarLink'
  import SidebarLinkGroup from './components/SidebarLinkGroup'
  export default {
    name: 'app-sidebar',
     components: {
      SidebarLink,
      SidebarLinkGroup
    },
   props: {
      isOpen: {
        type: Boolean
      },isVariant:{
        type: Boolean
      },
     menu: { type: Array, required: false, 
     default:()=>{ 
        return []
     }},

    }
    , data () {
    return {
      clipped: true,
      fixed: false,
      right: true,
      rightDrawer: false,
      mini:false,
      props:{},
        items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
}}
    
   
  }
     

</script>
