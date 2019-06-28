<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <v-breadcrumbs divider=" > " :items="breadcrumbs">
    </v-breadcrumbs>
  </v-layout>  
</template>

<script>
import menu from '../util/menu';
export default {
  data () {
    return {

    };
  },
  computed: {
    breadcrumbs: function () {
      
      let breadcrumbs = [];
      menu.forEach(item => {
        if(item.path && item.path === this.$route.path) {
          breadcrumbs.push({ text: item.grupo, disabled: true});
        }
        else{
          if(item.items){
            item.items.forEach(subItem => {
              if(subItem.path && this.$route.path.indexOf(subItem.path) !== -1){

                let subRoutes = this.$route.path.split('/');
                let counter = 1;
                let path = '#';
                subRoutes.forEach(route => {
                  if(route !== ''){
                    
                    let name = route.charAt(0).toUpperCase() + route.substr(1);
                    let isCurrentRoute = subRoutes.length - 1 === counter ? true : false;
                    path = path + '/' + route;
                    let element = {
                      text: name,
                      disabled: isCurrentRoute,
                      href: path
                    }
                    breadcrumbs.push(element);
                    counter++;
                  }
                });
              }
            })
          }
        }
      });
      return breadcrumbs;
    },    
  }
};
</script>
