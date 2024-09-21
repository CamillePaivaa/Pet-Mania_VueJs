<template>
  <div class="sessao3_container">
    <div class="text_publi_container">
      <div class="text_publi">
        <h2>LOJA PET</h2>
        <p>
          São milhares de produtos exclusivos para o seu amiguinho favorito!
        </p>
      </div>
      <div><p class="text">+ de 3mil Pets alcançados</p></div>
    </div>

    <div class="img_container">
      <div class="img_descri">
        <img class="img" src="../assets/assertsInicio/sessao3/img1.png" />
        <p>Cachecol Vermelho de Natal</p>
      </div>

      <div class="img_descri">
        <img class="img" src="../assets/assertsInicio/sessao3/img2.png" />
        <p>Conjunto de Jaqueta e Boné</p>
      </div>

      <div class="img_descri">
        <img class="img" src="../assets/assertsInicio/sessao3/img3.png" />
        <p>Moletom Inverto com Touca</p>
      </div>

      <div class="img_descri">
        <img class="img" src="../assets/assertsInicio/sessao3/img4.png" />
        <p>Cachecol Vermelho de Pelúcia</p>
      </div>

      <div class="img_descri">
        <img class="img" src="../assets/assertsInicio/sessao3/img5.png" />
        <p>Jaqueta de Couro Esportiva</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.sessao3_container {
  background-image: url("../assets/assertsInicio/sessao3/fundoSessao3.png");
  background-size: cover;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20%;
  padding-right: 20%;
}

.img_container {
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  padding-top: 40px;
  justify-content: center;
}

.img {
  width: 150px;
  height: 150px;
}

.img_descri {
  display: flex;
  flex-direction: column;

  p {
    color: #fff;
    text-align: center;
  }
}
.text_publi_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
}

.text {
  font-size: 27px;
  font-weight: 500;
  color: #ff06a2;
}

.text_publi {
  display: flex;
  flex-direction: column;
  color: white;
}
</style>
