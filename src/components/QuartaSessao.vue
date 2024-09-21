<template>
  <div class="sessao4_container">
    <h2>AVALIAÇÕES DE NOSSOS CLIENTES</h2>
    <div class="cards_container">
      <div class="card">
        <img src="../assets/assertsInicio/sessao4/pessoa1.png" />
        <h4>JULIANA FREITAS</h4>
        <p>Levei o meu Pet para tomar banho e ele amou ...</p>
      </div>

      <div class="card">
        <img src="../assets/assertsInicio/sessao4/pessoa2.png" />
        <h4>JOAO AUGUSTO</h4>
        <p>Melhor PetShop que existe, amei o atendimento ...</p>
      </div>

      <div class="card">
        <img src="../assets/assertsInicio/sessao4/pessoa3.png" />
        <h4>ELEN DA SILVA</h4>
        <p>Possui ótimos produtos e várias opções de roupas...</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.sessao4_container {
  background-image: url("../assets/assertsInicio/sessao4/fundoSessao4.png");
  background-size: cover;
  height: 750px;
  margin-top: -106px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 100px;

  h2 {
    margin-left: 20%;
    margin-right: 20%;
    color: #fff;
  }
}

.cards_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 50px;

  img {
    width: 130px;
    height: 130px;
  }
}

.card {
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #ff06a2;
  width: 290px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    width: 240px;
  }

  h4 {
    color: #ff06a2;
  }
}
</style>
