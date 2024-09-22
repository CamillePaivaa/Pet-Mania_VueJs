<template>
  <CabecalhoPrincipal />
  <SessaoInicial id="inicio" />
  <SegundaSessao id="quem-somos" />
  <TerceiraSessao id="loja-pet" />
  <QuartaSessao id="avaliacoes" />
  <QuintaSessao id="venha-ser-pet-mania" />
</template>

<script>
import CabecalhoPrincipal from "@/components/CabecalhoPrincipal.vue";
import SessaoInicial from "./SessaoInicial.vue";
import SegundaSessao from "./SegundaSessao.vue";
import TerceiraSessao from "./TerceiraSessao.vue";
import QuartaSessao from "./QuartaSessao.vue";
import QuintaSessao from "./QuintaSessao.vue";

export default {
  name: "InicioPage",

  components: {
    CabecalhoPrincipal,
    SessaoInicial,
    SegundaSessao,
    TerceiraSessao,
    QuartaSessao,
    QuintaSessao,
  },
};
</script>
