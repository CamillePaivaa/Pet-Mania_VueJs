<template>
  <div class="cabecalho_container">
    <div class="elementos_container">
      <img class="logo" src="../assets/logo.png" />

      <div class="opc_navegacao">
        <router-link to="/">Inicio</router-link>
        <router-link to="/LojaPet">Loja Pet</router-link>
        <router-link to="/NossosServicos">Nossos Serviços</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
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
  width: 60%;
  column-gap: 200px;
  margin: 0 20% 0 20%;
  align-items: center;
}
.opc_navegacao {
  display: flex;
  flex-direction: row;
  column-gap: 50px;

  a {
    color: white;
    text-decoration: none;
  }
}
</style>
