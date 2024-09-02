import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuelidatePlugin from "@vuelidate/validators";

createApp(App).use(store).use(router).use(VuelidatePlugin).mount("#app");
