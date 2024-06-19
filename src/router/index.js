import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ListingsView from "@/views/ListingsView.vue";
import AboutView from "@/views/AboutView.vue";
import SignIn from "@/components/UI/auth/SignIn.vue";
import SignUp from "@/components/UI/auth/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/listings",
    name: "Listings",
    component: ListingsView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/auth/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/auth/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
