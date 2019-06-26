import Vuex from "vuex";
import Vue from "vue";

import axios from '@/util/axios';
import moment from 'moment';
import constantes from '@/util/constantes';

import dashboard from './modules/dashboard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard
  },

  state: {
    
    user: {
      name: '',
      email: '',
      password: ''
    },
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
    carregando: false,
  },

  getters: {
    
    usuarioLogado(state) {
      if(state.user){
        return state.user.name;
      }
      else{
        return '';
      }
    },
  },

  actions: {

    
  },

  mutations: {

    setUser(state, user) {
      state.user = user;

      // utilizado para recuperar a informação durante os reloads
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state, data){
      
      state.user = null;
      localStorage.removeItem('user');
      data.router.push('/');
    },
    setCarregando(state, valor){
      state.carregando = valor;
    },
    setMensagemErro(state, mens){
      state.snackbar.text = mens;
      state.snackbar.color = 'red';
      state.snackbar.show = true;
    },
    setMensagemSucesso(state, mens){
      state.snackbar.text = mens;
      state.snackbar.color = 'green';
      state.snackbar.show = true;
    }
  }
});
