import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundo from '@/views/HolaMundo.vue'
import PokemonView from '@/views/PokemonView.vue'
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/hola/:id', /*para el path variable se usa los 2 puntos */
		name: 'hola',
		component: HolaMundo
	},
	{
		path: '/pokemon',
		name: 'pokemon',
		component: PokemonView
	},

	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import ( /* webpackChunkName: "about" */
				'../views/AboutView.vue')
	}, {
		path: '/pregunta',
		name: 'pregunta',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import ( /* webpackChunkName: "about" */
				'../views/PreguntaView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router