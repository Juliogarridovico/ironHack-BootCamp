import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () =>
      import(/* webpackChunkName: 'index' */ "../views/HomeView.vue"),
  },
  {
    path: "/countries/:country",
    name: "details",
    component: () =>
      import(/* webpackChunkName: 'details' */ "../views/CountryDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
