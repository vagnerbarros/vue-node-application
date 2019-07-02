<template>
  <v-form v-model="valid" ref="formClient">
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Client Information">
            <div slot="widget-content">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <v-text-field label="First Name" v-model="client.firstName" :rules="firstName" data-cy="firstName"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field label="Last Name" v-model="client.lastName" :rules="lastName" data-cy="lastName"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12>
                    <v-text-field label="Adress" v-model="client.adress" :rules="adress" data-cy="adress"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm8>
                    <v-text-field label="City" v-model="client.city" :rules="city" data-cy="city"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field label="State" v-model="client.state" :rules="state" data-cy="state"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
      <v-layout justify-end>
        <v-btn @click="cancel()">Cancel</v-btn>    
        <v-btn color="primary" :loading="loading" @click="send()" :disabled="!valid" data-cy="save">Save</v-btn>
      </v-layout>
    </v-container>

  </v-form>  
</template>


<script>

import {mapState, mapGetters, mapActions} from "vuex";
import VWidget from '../components/VWidget';

export default {

  components:{
    VWidget
  },

  data: () => ({

    valid: false,
    firstName: [v => !!v || "First Name is Required"],
    lastName: [v => !!v || "Last Name is Required"],
    adress: [v => !!v || "Adress is Required"],
    city: [v => !!v || "City is Required"],
    state: [v => !!v || "State is Required"],
  }),

  computed: {

    ...mapState('client', {
      client: 'currentClient',
      loading: 'loading'
    }),
  },

  methods: {

    
    send() {
      if (this.$refs.formClient.validate()) {
        this.$store.dispatch('client/save', {router: this.$router});
      }
    },
    
    cancel() {
      this.$store.dispatch('client/cancel', {router: this.$router});
    }
  }
};
</script>

<style scoped>
.container.grid-list-md .layout .flex{
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
}

</style>