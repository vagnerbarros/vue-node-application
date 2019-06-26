<template>
  <div>
    <v-card>
      <v-card-title primary-title>Deseja Realmente sair do sistema?</v-card-title>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-card-actions>
              <v-btn color="primary" @click="logout()">Sim</v-btn>
              <v-btn @click="home()">Não</v-btn>
          </v-card-actions>
        </v-layout>
      </v-container>
      </v-card>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        
      }
    },

    computed: {
        
    },

    methods: {
        logout(){
            this.$store.commit('logout', {router: this.$router});
        },
        home(){
            this.$router.push('/home');
        }
    }
  }
</script>