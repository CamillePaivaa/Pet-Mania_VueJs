<template>
  <div class="page_container">
    <img class="uma_pata" src="../assets/assetsAgendamento/umaPata.png" />
    <img class="gato" src="../assets/assetsAgendamento/gato.png" />

    <form class="formulario_container">
      <h3>Seja Bem-Vindo!</h3>
      <p>Cuidamos do seu bichinho com o maior carinho do mundo</p>

      <label>Nome Completo</label>
      <input type="text" />

      <label>Data</label>
      <input type="date" />

      <label>Hora</label>
      <input type="time" />

      <label>Selecione os Serviços Desejados</label>
      <input type="checkbox" />
    </form>

    <img class="pastas_laterais" src="../assets/assetsAgendamento/patas.png" />
  </div>
</template>

<script>
export default {
  name: "AgendamentoPet",
};
</script>

<style>
.page_container {
  display: flex;
  flex-direction: row;
  padding-top: 90px;
  column-gap: 80px;
}

.uma_pata {
  width: 125px;
  height: 125px;
}

.gato {
  width: 500px;
  height: 650px;
}

.formulario_container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: rgba(255, 255, 255, 0.726);
  border-radius: 20px;
  border: 3px solid pink;
  height: 600px;
  padding-top: 30px;
}

.pastas_laterais {
  margin-top: 300px;
  width: 220px;
  height: 340px;
}
</style>
