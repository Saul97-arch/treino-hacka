import Vue from 'vue'
import VueRouter from 'vue-router'
import ChariCard from '../views/ChariCard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/ChariCard',
    name: 'ChariCard',
    component: ChariCard
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router