<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <v-breadcrumbs divider="-">
      <v-icon>home</v-icon>
      <v-breadcrumbs-item v-for="(item,key) in breadcrumbs" :key="key">{{ item }}</v-breadcrumbs-item>
    </v-breadcrumbs>
  </v-layout>  
</template>

<script>
import menu from '../util/menu';
export default {
  data () {
    return {
      title: ''
    };
  },
  computed: {
    breadcrumbs: function () {
      let breadcrumbs = [];
      menu.forEach(item => {
        if(item.path && item.path === this.$route.path) {
          this.title = item.titulo;
          breadcrumbs.push(item.grupo + ' - ' + item.nome);
        }
        else{
          this.title = '';
        }
      });
      return breadcrumbs;
    },    
  }
};
</script>
