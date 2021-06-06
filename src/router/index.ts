import { createRouter, createWebHistory, NavigationGuard, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import Login from '@/views/Login.vue';
import Artist from '@/views/Artist.vue';
import Track from '@/views/Track.vue';
import Global from '@/views/Global.vue';

const ifAuthenticated: NavigationGuard = (to, from, next) => {
  if (localStorage.getItem('token')) {
    next()
  } else {
    next({ name: 'Login' })
  }
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
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
    path: '/track/:id',
    name: 'Track',
    component: Track,
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
