import { createRouter, createWebHistory, NavigationGuard, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Signin from '../views/Signin.vue';
import Artist from '../views/Artist.vue';
import Global from '../views/Global.vue';

const ifAuthenticated: NavigationGuard = (to, from, next) => {
  if (localStorage.getItem('token')) {
    next()
  } else {
    next({ name: 'Signin' })
  }
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/user/:userid',
    name: 'User',
    component: User,
    beforeEnter : ifAuthenticated,
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: Artist,
    beforeEnter : ifAuthenticated,
  },
  {
    path: '/global',
    name: 'Global',
    component: Global,
    beforeEnter : ifAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
