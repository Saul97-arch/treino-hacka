import Vue from 'vue'
import VueRouter from 'vue-router'
import Bulbasaur from '../views/Bulbasaur.vue'
import ChariCard from '../views/ChariCard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/ChariCard',
        name: 'ChariCard',
        component: ChariCard
    },
    {
        path: '/bulbasaur',
        name: 'Bulbasaur',
        component: Bulbasaur
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router