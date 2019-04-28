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
import myplayer from '@/components/select/myplayer'
import bofang from '@/components/select/bofang'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import axios from 'axios'

Vue.use(VideoPlayer)
Vue.use(Router)
Vue.use(iView)
Vue.prototype.$http=axios

export default new Router({
	routes: [
		{path: '/',name: 'home',component: home},
		{path: '/login',name: 'login',component: login},
		{path: '/upload',name: 'upload',component: upload},
		{path: '/register',name: 'register',component: register},
		{path: '/fun',name: 'fun',component: fun},
		{path: '/life',name: 'life',component: life},
		{path: '/digit',name: 'digit',component: digit},
		{path: '/myplayer',name: 'myplayer',component: myplayer},
		{path: '/bofang',name: 'bofang',component: bofang}

	]
})
