<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    </v-toolbar-title>
      <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>

import {mapGetters, mapState} from 'vuex';

export default {
  name: 'app-toolbar',

  data: () => ({

  }),

  computed: {
    
    ...mapState({
      carregando: 'carregando'
    }),

  },

  methods: {
    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
    },
  },
};
</script>
