import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import pt from 'vuetify/es5/locale/pt';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    primary: colors.blue.base,
    secondary: colors.blue.lighten4,
    accent: colors.blue.base 
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});