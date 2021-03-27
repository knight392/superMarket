import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~views/home/Home'
const Category = () => import('~views/category/Category')
const Cart = () => import('~views/cart/Cart')
const Profile = () => import('~views/profile/Profile')
Vue.use(VueRouter)
// 给push多次进入相同路由时捕获错误


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router