import Vuex from "vuex";
import Vue from "vue";

import client from './modules/client';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    client
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
      color: 'primary',
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
    setErrorText(state, mens){
      state.snackbar.text = mens;
      state.snackbar.color = 'red';
      state.snackbar.show = true;
    },
    setSucessText(state, mens){
      state.snackbar.text = mens;
      state.snackbar.color = 'primary';
      state.snackbar.show = true;
    }
  }
});
