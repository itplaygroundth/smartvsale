<template>
<v-list-group
        prepend-icon="account_circle"
        value="true"
      >
</v-list-group>
</template>

<script>
  import SidebarLink from './SidebarLink'
 

  export default {
    name: 'sidebar-link-group',
    components: {
      SidebarLink

    },
    
  }

</script>

<style lang="scss">
@import "src/sass/variables";
  .sidebar-link-group {
    .sidebar-link__router-link {
      .expand-icon {
        position: absolute;
        right: $sidebar-arrow-right;
        top: calc(50% - #{$font-size-root} / 2);
        font-weight: bold;
        transition: transform 0.3s ease;
      }
      &.expanded {
        .expand-icon {
          transform: rotate(180deg);
        }
      }
    }

    .sidebar-submenu {
      list-style: none;
      padding-left: 0;
      li {
        display: block;
        padding-left: 0;
      }
      .sidebar-link__router-link {
        height: $sidebar-submenu-link-height;
        padding-left: $sidebar-submenu-link-pl;
        font-size: $font-size-smaller;
      }
    }
  }

  .expand-icon {
    color: $vue-green;
  }

</style>
