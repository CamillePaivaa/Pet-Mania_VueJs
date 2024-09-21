<template>
  <div class="sessao2_container">
    <img
      class="pegadasLaterais"
      src="../assets/assertsInicio/sessao2/img2PegadasLaterais.png"
    />
    <div class="text_publicidade">
      <h2>QUEM SOMOS?</h2>
      <p>
        O melhor para seu Pet você só encontra na Pet Mania,nós sabemos que ter
        um animal de estimação é sinônimo de amizade, companhia e muita alegria,
        mas junto com tudo isso é necessário dar os cuidados especiais que eles
        precisam. Somos uma loja especializada para melhor atender o seu pet.
        Oferecemos os melhores produtos do mercado, desde acessórios, roupas,
        comidinhas e muito mais!!! Além de tudo isso você ainda pode agendar um
        atendimento exclusivo para o seu bichinho no nosso site. NÃO É DEMAIS?
        Não fique fora dessa!
      </p>
      <div class="imgModelos">
        <img src="../assets/assertsInicio/sessao2/img2Gato.png" />
        <img src="../assets/assertsInicio/sessao2/img2DogModelo.png" />
      </div>
    </div>
    <img
      class="dogLateral"
      src="../assets/assertsInicio/sessao2/img2DogLateral.png"
    />
  </div>
</template>

<script></script>

<style>
.sessao2_container {
  display: flex;
  flex-direction: row;
}

.text_publicidade {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  row-gap: 10px;

  h2,
  p {
    width: 700px;
    margin-left: 120px;
  }
}

.imgModelos {
  display: flex;
  flex-direction: row;
  padding-top: 20px;

  img {
    width: 440px;
    height: 350px;
  }
}

.dogLateral {
  width: 500px;
  height: 500px;
  margin-right: -10px;
}
</style>
