<template>
  <v-navigation-drawer id="appDrawer" persistent :mini-variant="mini" :clipped="clipped" fixed :dark="$vuetify.dark" app v-model="drawer" enable-resize-watcher width="260">
    <v-toolbar color="primary darken-1" dark @click="mudarRota('/home')" style="cursor: pointer">
      <img v-bind:src="require('@/assets/vuetify.png')" height="36">
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vuetify</span>
      </v-toolbar-title>        
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense expand>
        <template v-for="(item, i) in menusAcessiveis">
            <!--Elementos de Divisão e Subheaders-->
            <v-subheader v-if="item.cabecalho" :key="i">{{ item.cabecalho }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="i"></v-divider>
            
            <!-- Elementos com sublinks -->
            <v-list-group v-else-if="item.items" :key="item.nome" :group="item.grupo" :prepend-icon="item.icone" :no-action="false">
              <v-list-tile slot="activator" ripple="ripple">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <template v-for="(subItem, i) in item.items">
                <v-list-tile v-if="subItem.path" :key="i" ripple="ripple" @click="mudarRota(subItem.path)">
                  <v-list-tile-action v-if="subItem.icone">
                    <v-icon>{{ subItem.icone }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title><span>{{ subItem.titulo }}</span></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

            </v-list-group>

            <!--Elementos sem sublinks-->
            <v-list-tile v-else-if="!item.hidden" @click="mudarRota(item.path)" ripple="ripple" rel="noopener" :key="item.nome">
              <v-list-tile-action v-if="item.icone">
                <v-icon>{{ item.icone }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        </template>
      </v-list>        
    </vue-perfect-scrollbar>        
  </v-navigation-drawer>
</template>

<script>
import menu from '@/util/menu';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'app-drawer',
  components: {
    VuePerfectScrollbar,
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      mini: false,
      drawer: true,
      fixed: true,
      clipped: false,
      menu: menu,
      scrollSettings: {
        maxScrollbarLength: 160
      }    
    }
  },
  computed: {

    computeGroupActive () {
      return true;
    },

    sideToolbarColor () {
      return this.$vuetify.options.extra.sideNav;
    },

    menusAcessiveis(){
      return this.menu;
    }
  },

  created () {
    window.getApp.$on('APP_DRAWER_TOGGLED', () => {
      this.drawer = (!this.drawer);
    });
  },
  

  methods: {

    mudarRota(path) {
      this.$router.push(path);
    },
    
    alterarDrawer(){
      this.drawer = (!this.drawer);
    }
  }
};
</script>


<style lang="stylus">
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto

</style>
