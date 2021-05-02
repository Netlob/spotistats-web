import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Signin from '../views/Signin.vue';
import Artist from '../views/Artist.vue';
import Global from '../views/Global.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: Artist,
  },
  {
    path: '/global',
    name: 'Global',
    component: Global,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
