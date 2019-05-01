import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        url:'http://39.108.94.12/1.mp4',
    }
})

export default store