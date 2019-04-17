import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import login from '@/components/header/Login'
import upload from '@/components/header/upload'
import register from '@/components/header/register'
import fun from '@/components/select/Fun'
import life from '@/components/select/Life'
import digit from '@/components/select/Digit'
import home from '@/components/select/Home'

Vue.use(Router)
Vue.use(iView)

export default new Router({
	routes: [
		{path: '/',name: 'home',component: home},
		{path: '/login',name: 'login',component: login},
		{path: '/upload',name: 'upload',component: upload},
		{path: '/register',name: 'register',component: register},
		{path: '/fun',name: 'fun',component: fun},
		{path: '/life',name: 'life',component: life},
		{path: '/digit',name: 'digit',component: digit},

	]
})
