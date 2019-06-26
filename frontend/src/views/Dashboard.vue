<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Produtos Vendidos" content-bg="white">
            <div slot="widget-content">
                
            </div>
          </v-widget>  
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import VWidget from '../components/VWidget';
import Material from 'vuetify/es5/util/colors';
import {mapState, mapActions} from 'vuex';


export default {
  
  components: {
    VWidget,
  },

  data: () => ({
    color: Material,
    selectedTab: 'tab-1'
  }),

  computed: {

    ...mapState('dashboard', {
      carregando: 'carregando',
      produtos: 'produtos'
    })
  },

  methods: {

    ...mapActions('dashboard', {
      produtosVendidos: 'produtosVendidos'
    })
  },

  created(){

    let periodo = {
      data_inicio: '2019-01-01',
      data_fim: '2019-06-30'
    }
    this.produtosVendidos(periodo);
  }
};
</script>
