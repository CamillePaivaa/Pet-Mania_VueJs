import { createRouter, createWebHistory } from "vue-router";

import Inicio from "@/components/InicioPage.vue";
import AgendamentoPet from "@/components/AgendamentoPet.vue";

const routes = [
  {
    path: "/",
    component: Inicio,
  },

  {
    path: "/AgendamentoPet",
    component: AgendamentoPet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
