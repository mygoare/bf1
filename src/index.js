// import Vue from 'vue';

// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

// import FastClick from 'fastclick';

import App from './app.vue';

require('./css/main.scss');

// Vue.use(iView);

FastClick.attach(document.body);

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: h => h(App),
}).$mount(root);
