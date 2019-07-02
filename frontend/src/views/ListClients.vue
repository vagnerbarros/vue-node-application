<template>
  <div>
    <v-container fluid>
      <v-card>  
        <v-toolbar flat color="white">
          <v-text-field flat solo full-width single-line hide-details clearable v-model="search" max-width="300px" prepend-inner-icon="search" label="Search Client"></v-text-field>
          <v-btn color="primary" @click="newClient({router : $router})">New Client</v-btn>
        </v-toolbar>
        <v-data-table color="transparent" :headers="headers" :items="clients" :search="search" :loading="loading">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.firstName }}</td>
          <td>{{ props.item.lastName }}</td>
          <td>{{ props.item.city }}</td>
          <td>{{ props.item.state }}</td>
          <td class="justify-center layout px-0">
            <v-icon class="mr-2" @click="editClient({client : props.item, router : $router})" data-cy="edit">edit</v-icon>
            <v-icon @click="remove(props.item)" data-cy="remove">delete</v-icon>
          </td>
        </template>
        </v-data-table>
      </v-card>    
    </v-container>
</div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    data () {
      return {
        headers: [
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'lastName' },
          { text: 'City', value: 'city' },
          { text: 'State', value: 'state' },
          { text: 'Actions', value: 'name', align:'center',  sortable: false }
        ],
        search: ''
      }
    },

    computed: {
        ...mapState('client', {
            clients: 'clients',
            loading: 'loading'
        })
    },

    methods: {
        ...mapActions('client', {
            loadClients: 'load',
            editClient: 'edit',
            newClient: 'newClient'
        }),

        remove(client){

          this.$root.$confirmacao.open('Remove', 'Are you sure?')
          .then((confirmed) => {
            if(confirmed){
              this.$store.dispatch('client/remove', client);
            }
          });
        }
    },

    created(){
      this.loadClients();
    }
  }
</script>