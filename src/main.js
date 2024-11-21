import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuelidatePlugin from "@vuelidate/validators";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

// Налаштування опцій для toast
const toastOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
};

const app = createApp(App);

// use plugins
app.use(store);
app.use(router);
app.use(VuelidatePlugin);
app.use(Toast, toastOptions);

app.mount("#app");
