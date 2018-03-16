// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'beautify-scrollbar/dist/index.css'
import 'v2-table/dist/index.css'
import V2Table from 'v2-table'
Vue.use(V2Table)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

if (!String.prototype.format) {
    String.prototype.format = function() {
      let a = this;
      for (let k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
      }
      return a
    }
}