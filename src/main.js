// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: c=> c(App),//render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的router-link和view直接写到el控制元素中
  router,//将路由对象挂载到vm上
})


//注意app这个组件是通过vm实例的render函数渲染出来的,render函数如果要渲染组件,渲染出来的组件,只能放到el: '#app'所指定的元素中
//account和goodlist组件,是通过路由匹配监听到的,所以这两个组件只能展示到属于路由的<router-view></router-view>