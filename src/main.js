import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VuelidatePlugin from '@vuelidate/validators';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { createPinia } from 'pinia';
import style from "..//src/shared/styles/style.css"

// Налаштування опцій для toast
const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
  closeOnClick: true
};

const app = createApp(App);
const pinia = createPinia();

// use plugins
app.use(store);
app.use(router);
app.use(VuelidatePlugin);
app.use(Toast, toastOptions);
app.use(pinia);
app.use(style);

app.mount('#app');
