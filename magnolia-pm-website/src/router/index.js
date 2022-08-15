import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import UnderConstruction from "../views/UnderConstruction.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UnderConstruction,
      // component: MainView,
    },
  ],
});

export default router;
