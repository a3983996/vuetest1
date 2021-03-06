import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// Import component
import Vue3Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { currency } from "./methods/filters";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
};
app.use(VueAxios, axios);
app.use(router);
app.component("Vue3Loading", Vue3Loading);
app.mount("#app");
