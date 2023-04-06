import Vue from 'vue'
import App from './App.vue'

import './assets/styles/variables.sass'
import './assets/styles/mixins.sass'
import './assets/styles/transitions.sass'
import './assets/styles/base.sass'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
