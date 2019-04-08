import Vue from 'vue'
import router from './router'
import App from './App'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'assets/css/app.styl'
import axios from 'axios'
import pageNav from './lib/pager'

Vue.use(BootstrapVue)

Vue.prototype.$http = axios
Vue.prototype.$config = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '900a059c721165f24d2eea4b58490e05'
}

Vue.prototype.$pageNav = pageNav

Vue.prototype.$http.get(Vue.prototype.$config.baseUrl + 'configuration?api_key=' + Vue.prototype.$config.apiKey + '&language=en-US')
  .then(response => {
    if (response.data.images) {
      Vue.prototype.$config.images = response.data.images
    }
    if (response.data.change_keys) {
      Vue.prototype.$config.change_keys = response.data.change_keys
    }
    /* eslint-disable-next-line no-new */
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  })
  .catch(error => {
    console.log(error)
  })
