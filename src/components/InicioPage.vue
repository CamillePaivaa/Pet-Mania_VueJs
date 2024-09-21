<template>
  <SessaoInicial />
  <SegundaSessao />
  <TerceiraSessao />
  <QuartaSessao />
  <QuintaSessao />
</template>

<script>
import SessaoInicial from "./SessaoInicial.vue";
import SegundaSessao from "./SegundaSessao.vue";
import TerceiraSessao from "./TerceiraSessao.vue";
import QuartaSessao from "./QuartaSessao.vue";
import QuintaSessao from "./QuintaSessao.vue";

export default {
  name: "InicioPage",

  components: {
    SessaoInicial,
    SegundaSessao,
    TerceiraSessao,
    QuartaSessao,
    QuintaSessao,
  },
};
</script>
