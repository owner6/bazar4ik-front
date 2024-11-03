import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreateAds from "@/views/CreateAds.vue";
import UserListings from "@/views/UserListings.vue";
import MyAccount from "@/views/MyAccount.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/create-ads",
    name: "createAds",
    component: CreateAds,
  },
  {
    path: "/user-listings",
    name: "user",
    component: UserListings,
  },
  {
    path: "/my-account",
    name: "myAccount",
    component: MyAccount,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem("authToken");

  if (to.matched.some((record) => record.meta.requiresAuth) && authToken) {
    next("/");
  } else {
    next();
  }
});

export default router;
