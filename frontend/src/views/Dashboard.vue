<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Chart 1" content-bg="white">
            <div slot="widget-content">
                
            </div>
          </v-widget>  
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Chart 2" content-bg="white">
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

  },

  methods: {

    
  },
};
</script>
