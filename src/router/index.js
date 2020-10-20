import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Home from '@/page/home'
import Login from '@/page/login'
import StoreList from '@/page/storelist'
import Order from '@/page/order'
import Cart from '@/page/cart'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
			children: [
				{
					path: '',
					name: 'Home',
					component: Home
				},
				{
					path: 'home',
					name: 'Home',
					component: Home
				},
				{
					path: 'order',
					name: 'Order',
					component: Order
				},
				{
					path: 'cart',
					name: 'Cart',
					component: Cart
				}
			]
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/storelist',
			name: 'StoreList',
			component: StoreList
		},
	]
})
