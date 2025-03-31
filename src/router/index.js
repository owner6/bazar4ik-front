import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CreateListings from '@/features/listing/views/CreateListings.vue';
import UserListings from '@/features/user/views/UserListingsView.vue';
import MyAccount from '@/features/user/views/MyAccountView.vue';
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
