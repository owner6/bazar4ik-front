import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CreateListings from '@/views/CreateListings.vue';
import UserListings from '@/views/UserListingsView.vue';
import MyAccount from '@/views/MyAccountView.vue';
import InactiveListingsView from '@/views/InactiveListingsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/create-listings',
    name: 'createListings',
    component: CreateListings
  },
  {
    path: '/user-listings',
    name: 'user',
    component: UserListings
  },
  {
    path: '/my-account',
    name: 'myAccount',
    component: MyAccount
  },
  {
    path: '/inactive-listings',
    name: 'InactiveListings',
    component: InactiveListingsView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem('authToken');

  if (to.matched.some((record) => record.meta.requiresAuth) && authToken) {
    next('/');
  } else {
    next();
  }
});

export default router;
