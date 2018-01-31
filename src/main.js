import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

// store.commit('INIT_JOKES', [{ test: '1st default test' }, { test2: '2nd default test' }])
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
