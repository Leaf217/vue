// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
//实例化一个根组件
new Vue({
  el: '#app',//挂载到id为app的元素中，即index.html中body中的div中
  components: { App },//使用components局部注册组件
  template: '<App/>'
})