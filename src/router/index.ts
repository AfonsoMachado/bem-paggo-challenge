import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "/",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/purchase",
        name: "purchase",
        component: () => import("../layout/PurchaseForm.vue"),
      },
      {
        path: "/checkout",
        name: "checkout",
        component: () => import("../layout/CheckoutPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
