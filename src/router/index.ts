import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import store from "@/store";

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
        beforeEnter: (to: Route, from: Route, next: any) => {
          if (
            from.name !== "purchase" &&
            !store.getters["StickersStore/validStore"]
          ) {
            next("/");
          }
          next();
        },
        component: () => import("../layout/CheckoutPage.vue"),
      },
      {
        path: "/thanks",
        name: "thanks",
        component: () => import("../layout/ThanksPage.vue"),
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
