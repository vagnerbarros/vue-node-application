<template>
  <div id="appRoot">
    <v-snackbar :timeout="snackbar.color == 'red' ? 30000 : 9000" bottom multi-line :color="snackbar.color" v-model="snackbar.show">{{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon> 
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <template v-if="!$route.meta.requiresAuth">
      <v-app id="inspire" class="app">
        <router-view></router-view>
      </v-app>
    </template>
    <template v-else>
      <dialog-confirmacao ref="dialog_confirm" />
      <Home/>
    </template>
  </div>
</template>

<script>

import {mapState} from 'vuex';
import DialogConfirmacao from './components/dialogs/DialogConfirmacao';
import Home from './views/Home';

export default {
  name: 'App',
  computed: {
    ...mapState({
      snackbar: 'snackbar'
    })
  },
  components: {
    Home,
    DialogConfirmacao  
  },
  mounted(){
    this.$root.$confirmacao = this.$refs.dialog_confirm;
  }
}
</script>
