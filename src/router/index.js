import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import DashboradView from "../views/DashboardView.vue"

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/register',
    component: RegisterView,
    name: 'register'
  },
  {
    path: '/login',
    component: LoginView,
    name: 'login'
  },
  {
    path: '/dashboard',
    component: DashboradView,
    name: 'dashboard'
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router