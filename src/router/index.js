import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
//head
import upload from '@/components/header/upload'
import upload2 from '@/components/header/upload2'
import register from '@/components/header/register'
import userinfor from '@/components/header/userinfor'
import messinfor from '@/components/header/messinfor'
import adminmanage from '@/components/header/adminmanage'
import liuyanban from '@/components/header/liuyanban'
import collect from '@/components/header/collect'
//select
import dianying from '@/components/select/dianying'
import juji from '@/components/select/juji'
import zongyi from '@/components/select/zongyi'
import home from '@/components/select/Home'
import myplayer from '@/components/select/myplayer'
import alteruser from '@/components/select/alteruser'
//登录路由
import userlogin from '@/components/select/login/userlogin'
import adminlogin from '@/components/select/login/adminlogin'
//播放
import bofang from '@/components/bofang/bofang'
import sidebofang from '@/components/bofang/sidebofang'
import uploadbofang from '@/components/bofang/uploadbofang'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'

Vue.use(VueVideoPlayer)
Vue.use(Router)
Vue.use(iView)

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	},
	routes: [{
			path: '/',
			name: 'home',
			component: home,
		},
		{
			path: '/upload',
			name: 'upload',
			component: upload,
			//拦截
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
			path: '/dianying',
			name: 'dianying',
			component: dianying
		},
		{
			path: '/juji',
			name: 'juji',
			component: juji
		},
		{
			path: '/zongyi',
			name: 'zongyi',
			component: zongyi
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
			path: '/sidebofang',
			name: 'sidebofang',
			component: sidebofang
		},
		{
			path: '/userlogin',
			name: 'userlogin',
			component: userlogin
		},
		{
			path: '/adminlogin',
			name: 'adminlogin',
			component: adminlogin
		},
		{
			path: '/userinfor',
			name: 'userinfor',
			component: userinfor
		},
		{
			path: '/alteruser',
			name: 'alteruser',
			component: alteruser
		},
		{
			path: '/adminmanage',
			name: 'adminmanage',
			component: adminmanage
		},
		{
			path: '/messinfor',
			name: 'messinfor',
			component: messinfor
		},
		{
			path: '/liuyanban',
			name: 'liuyanban',
			component: liuyanban
		},
		{
			path: '/collect',
			name: 'collect',
			component: collect
		},
		{
			path: '/uploadbofang',
			name: 'uploadbofang',
			component: uploadbofang
		},
		{
			path: '/upload2',
			name: 'upload2',
			component: upload2,
		},
	],
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
				path: '/userlogin',
				query: {
					redirect: to.fullPath
				} // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
			});
		}

	} else {
		next(); //无需token
	}
});
export default router;
