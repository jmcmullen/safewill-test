import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Vuesax from 'vuesax';
import WebFont from 'webfontloader';
import App from './components/App.vue';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/styles/global.scss';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(Vuesax);

WebFont.load({
  google: {
    families: ['Montserrat:n4,n7'],
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
