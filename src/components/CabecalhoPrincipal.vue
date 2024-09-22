<template>
  <div class="cabecalho_container">
    <div class="elementos_container">
      <img class="logo" src="../assets/logo.png" />

      <ul class="opc_navegacao">
        <li
          :class="{ ativo: sessaoAtiva === 'inicio' }"
          @click="scrollTo('inicio')"
        >
          Início
        </li>
        <li
          :class="{ ativo: sessaoAtiva === 'quem-somos' }"
          @click="scrollTo('quem-somos')"
        >
          Quem Somos?
        </li>
        <li
          :class="{ ativo: sessaoAtiva === 'loja-pet' }"
          @click="scrollTo('loja-pet')"
        >
          Loja Pet
        </li>
        <li
          :class="{ ativo: sessaoAtiva === 'avaliacoes' }"
          @click="scrollTo('avaliacoes')"
        >
          Avaliações
        </li>
        <li
          :class="{ ativo: sessaoAtiva === 'venha-ser-pet-mania' }"
          @click="scrollTo('venha-ser-pet-mania')"
        >
          Faça Parte
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessaoAtiva: "inicio",
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollTo(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        this.sessaoAtiva = id;
      }
    },
    onScroll() {
      const sections = [
        { id: "inicio", offset: document.getElementById("inicio").offsetTop },
        {
          id: "quem-somos",
          offset: document.getElementById("quem-somos").offsetTop,
        },
        {
          id: "loja-pet",
          offset: document.getElementById("loja-pet").offsetTop,
        },
        {
          id: "avaliacoes",
          offset: document.getElementById("avaliacoes").offsetTop,
        },
        {
          id: "venha-ser-pet-mania",
          offset: document.getElementById("venha-ser-pet-mania").offsetTop,
        },
      ];

      const scrollPos = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].offset - 50) {
          this.sessaoAtiva = sections[i].id;
          break;
        }
      }
    },
  },
};
</script>

<style>
.cabecalho_container {
  background-color: #305bf9;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 70px;
  position: fixed;
  margin: 0;
}
.elementos_container {
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 70%;
  column-gap: 200px;
  margin: 0 15% 0 19%;
  align-items: center;
}
.opc_navegacao {
  display: flex;
  flex-direction: row;
  column-gap: 50px;
  color: #fff;
  list-style: none;
  cursor: pointer;
}

.ativo {
  color: #ff00a2;
  font-weight: bolder;
}
</style>
