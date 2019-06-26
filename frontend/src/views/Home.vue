<template>
  <v-app>
    <app-drawer class="app--drawer"></app-drawer>
    <app-toolbar class="app--toolbar"></app-toolbar>
      <v-content>
        <page-header></page-header>
        <div class="page-wrapper">
          <router-view></router-view>
        </div>   
        <v-footer height="auto" class="white pa-3 app--footer">
          <span class="caption">&copy; {{ new Date().getFullYear()}} Anron Software - Todos direitos reservados</span>
        </v-footer>
      </v-content>
      <app-fab></app-fab>
      
  </v-app>  
</template>

<script>

import {mapState} from 'vuex';

import AppDrawer from '../components/AppDrawer';
import AppToolbar from '../components/AppToolbar';
import AppFab from '../components/AppFab';
import PageHeader from '../components/PageHeader';

export default {

  components: {
    AppDrawer,
    AppToolbar,
    AppFab,
    PageHeader
  },

  data: () => ({
    
  }),

  computed: {

    ...mapState({
      snackbar: 'snackbar'
    }),

    usuarioLogado() {
      return this.$store.getters.usuarioLogado;
    },

    empresaLogada() {
      return this.$store.getters.empresaAtual.fantasia;
    },

    itemsAcessiveis(){
      
      let usuario = this.$store.state.user;
      if(usuario){

        if(usuario.nivel_acesso === 'NORMAL'){
          let elementos = [];
          this.items.forEach(elemento => {
            if(elemento.nivel === 1){
              elementos.push(elemento);
            }
          });
          return elementos;
        }
        else if(usuario.nivel_acesso === 'ADMINISTRADOR'){
          let elementos = [];
          this.items.forEach(elemento => {
            if(elemento.nivel === 1 || elemento.nivel === 2){
              elementos.push(elemento);
            }
          });
          return elementos;
        }
      }
    }
  },

  created(){
    window.getApp = this;
  },

  methods: {
    
    mudarRota(path) {
      this.$router.push(path);
    },

  }
};
</script>

<style lang="stylus" scoped>
  .setting-fab 
    top:50%!important; 
    right:0;
    border-radius:0  
  .page-wrapper
    min-height:calc(100vh - 64px - 50px - 81px );  

</style>
