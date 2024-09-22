<template>
  <div class="page_container">
    <img class="uma_pata" src="../assets/assetsAgendamento/umaPata.png" />
    <img class="gato" src="../assets/assetsAgendamento/gato.png" />

    <form class="formulario_container">
      <div class="titulo_info">
        <h3>Seja Bem-Vindo!</h3>
        <p>Cuidamos do seu bichinho com o maior carinho do mundo</p>
      </div>
      <div class="label_inputs">
        <!-- <label>Nome Completo</label>
        <input type="text" /> -->

        <InputComponent />

        <label>Data</label>
        <input type="date" />

        <label>Hora</label>
        <input type="time" />

        <label>Selecione os Serviços Desejados</label>
        <input type="checkbox" />
      </div>
    </form>

    <img class="pastas_laterais" src="../assets/assetsAgendamento/patas.png" />
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";

export default {
  name: "AgendamentoPet",

  components: {
    InputComponent,
  },
};
</script>

<style>
.page_container {
  display: flex;
  flex-direction: row;
  padding-top: 50px;
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
  height: 600px;
  width: 500px;
  padding-top: 30px;
}

.titulo_info {
  text-align: center;
}

.label_inputs {
  display: flex;
  flex-direction: column;
  padding: 5%;
  row-gap: 10px;
}
.pastas_laterais {
  margin-top: 300px;
  width: 220px;
  height: 340px;
}
</style>
