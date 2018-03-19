// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'

// Vue.config.productionTip = false;
Vue.use(VueRouter); //VRouter是一个类

//实例化一个router
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/apple',
      component: Apple
    },
    {
      path: '/banana',
      component: Banana
    }
  ]


});

//实例化一个根组件
new Vue({
  el: '#app',//挂载到id为app的元素中，即index.html中body中的div中
  router: router,
  components: { App },//使用components实现局部组件的注册
  template: '<App/>'
});
