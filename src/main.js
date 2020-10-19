// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import MyCarousel from 'my_carousel_jjw'
import store from './store/index.js'
import axios from 'axios'

//css
import 'vant/lib/index.css';

Vue.use(MyCarousel);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
})

window.onload = function(){
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
	var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}
