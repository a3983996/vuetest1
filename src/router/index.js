import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/DashboardView.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/ProductsView.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
