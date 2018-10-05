import Vue from 'vue';
import App from './app.vue';

require('./css/main.scss');

console.log('hello');

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: h => h(App),
}).$mount(root);
