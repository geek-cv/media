import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import login from '@/components/header/Login'
import upload from '@/components/header/upload'
import register from '@/components/header/register'
import information from '@/components/header/information'
import fun from '@/components/select/Fun'
import life from '@/components/select/Life'
import digit from '@/components/select/Digit'
import home from '@/components/select/Home'
import myplayer from '@/components/select/myplayer'
import bofang from '@/components/select/bofang'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'

Vue.use(VueVideoPlayer)
Vue.use(Router)
Vue.use(iView)


const router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/upload',
			name: 'upload',
			component: upload,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/fun',
			name: 'fun',
			component: fun
		},
		{
			path: '/life',
			name: 'life',
			component: life
		},
		{
			path: '/digit',
			name: 'digit',
			component: digit
		},
		{
			path: '/myplayer',
			name: 'myplayer',
			component: myplayer
		},
		{
			path: '/bofang',
			name: 'bofang',
			component: bofang
		},
		{
			path: '/information',
			name: 'information',
			component: information
		}
	]
});

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
	//获取store里面的token
	let token = store.state.token;
	//判断要去的路由有没有requiresAuth
	if (to.meta.requiresAuth) {

		if (token) {
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				} // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
			});
		}

	} else {
		next(); //如果无需token,那么随它去吧
	}
});
export default router;
