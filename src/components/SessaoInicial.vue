<template>
  <div class="primeiraTela">
    <img
      class="umaPegada"
      src="../assets/assertsInicio/sessao1/img1Umapegada.png"
    />
    <img class="imgInicial" src="../assets/assertsInicio/sessao1/img1Dog.png" />
    <div class="textPublicitario">
      <h2>O MELHOR PARA O SEU PET VOCÊ SÓ ENCONTRA NA PET MANIA</h2>
      <p>
        Ter um animal de estimação é sinal de companheirismo, amor e cuidado!
      </p>
      <router-link to="/AgendamentoPet"
        ><button class="btnPrincipal">Agendar Atendimento</button>
      </router-link>
    </div>
    <img
      class="pegadasLaterais"
      src="../assets/assertsInicio/sessao1/img1Pegadas.png"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #305bf9;
}
.primeiraTela {
  display: flex;
  flex-direction: row;
  column-gap: -40px;
  padding-top: 80px;
}

.umaPegada {
  width: 156px;
  height: 140px;
  margin-left: -67px;
}

.imgInicial {
  width: 800px;
  height: 900px;
  margin-top: -150px;
}

.textPublicitario {
  margin-top: 150px;
  margin-right: 100px;
  margin-left: -90px;
  color: white;
  p {
    width: 400px;
  }
}
.pegadasLaterais {
  width: 250px;
  height: 300px;
  margin-top: 430px;
  margin-right: 70px;
}
.btnPrincipal {
  color: white;
  background-color: #ff06a2;
  width: 200px;
  height: 45px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}
</style>
