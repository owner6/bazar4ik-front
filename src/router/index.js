import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ListOfAuthorizedUsers from "@/views/ListOfAuthorizedUsers.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/list-of-authorized-users",
    name: "List of authorized users",
    component: ListOfAuthorizedUsers,
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
