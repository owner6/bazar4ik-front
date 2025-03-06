import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CreateListings from '@/views/CreateListings.vue';
import UserListings from '@/views/UserListingsView.vue';
import MyAccount from '@/views/MyAccountView.vue';
import InactiveListingsView from '@/views/InactiveListingsView.vue';
import { useAuthStore } from '@/store/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/create-listings',
    name: 'createListings',
    component: CreateListings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user-listings',
    name: 'user',
    component: UserListings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/my-account',
    name: 'myAccount',
    component: MyAccount,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inactive-listings',
    name: 'InactiveListings',
    component: InactiveListingsView,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return {
      path: '/'
    };
  }

  return true;
});
export default router;
