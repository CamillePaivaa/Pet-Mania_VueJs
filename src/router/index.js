import { createRouter, createWebHistory } from "vue-router";

import Inicio from "@/components/InicioPage.vue";
import LojaPet from "@/components/LojaPet.vue";
import NossosServicos from "@/components/NossosServicos.vue";
import AgendamentoPet from "@/components/AgendamentoPet.vue";

const routes = [
  {
    path: "/",
    component: Inicio,
  },

  {
    path: "/LojaPet",
    component: LojaPet,
  },

  {
    path: "/NossosServicos",
    component: NossosServicos,
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
