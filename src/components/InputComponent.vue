<template>
  <div class="container">
    <p class="label">Nome Completo</p>
    <input placeholder="digite seu nome" value="Maria dos Santos" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
}
.label {
  position: absolute;
  top: -25px;
  left: 20px;
  background-color: rgb(79, 75, 75);
}

input {
  border: 1px solid red;
  border-radius: 20px;
}
</style>

<script>
export default {
  name: "InputComponent",
};
</script>
