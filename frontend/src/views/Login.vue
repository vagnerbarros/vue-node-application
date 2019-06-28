<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../assets/logo.png" alt="Vagner Barros" width="120" height="120">
                  <h1 class="flex my-4 primary--text">Vagner Barros</h1>
                </div>                
                <v-form v-model="valid" ref="formLogin">
                  <v-text-field autofocus append-icon="person" label="E-Mail" type="text" :rules="validateEmail" v-model="user.email"></v-text-field>
                  <v-text-field append-icon="lock" label="Password" type="password" :rules="validatePassword" v-model="user.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="primary" @click="validate(user)" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';

import moment from 'moment';
import axios from "@/util/axios";
import colors from 'vuetify/es5/util/colors';
import validador from '@/util/validador';

export default {
  data() {
    return {
      valid: false,
      validateEmail: [v => !!v || "Fill E-Mail", v => (v && validador.email(v)) || 'Invalid E-mail'],
      validatePassword: [v => !!v || "Fill Password"],
      user: {
        email: '',
        password: ''
      },
      loading: false,
      colors: colors
    };
  },

  methods: {

    validate(user){
      if(this.$refs.formLogin.validate()){
        this.login(user);
      }
      else{

      }
    },

    login(user) {
      
      this.loading = true;

      let userLogin = Object.assign({}, this.user);

      axios.post("/login", userLogin)
        .then(response => {

          localStorage.setItem("token", response.data.token);
          
          this.$store.commit("setUser", {
            name: response.data.name,
            email: response.data.email
          });

          this.$store.commit('setSucessText', 'Welcome ' + response.data.name);
          this.$router.replace({ path: "/home" });
        })
        .catch(erro => {

          localStorage.removeItem("token");
          this.$store.commit('setErrorText', erro.response.data.motivo);
        })
        .then(() => {
          this.carregando = false;
        });
    },

    ...mapState({
      snackbar : 'snackbar'
    })
  }
};
</script>

<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>