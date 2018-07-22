<template>
 <v-btn icon @click.stop="$emit('update:miniVariant',isVariant=!isVariant)">
        <v-icon v-html="isVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
</template>

<script>
  export default {
    name: 'variant-selector',
    data() {
      return {isVariant:false}
    }
    // props: {
    //   miniVariant: {
    //     type: Boolean
    //   },
    // }
  }
</script>

