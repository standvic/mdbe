
import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from './App.vue'
/*import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'*/

//Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    template: '<template>\n' +
        '    <div>\n' +
        '        <h1>Hello World!</h1>\n' +
        '    </div>\n' +
        '</template>'
    //render: h => h(App)
})
