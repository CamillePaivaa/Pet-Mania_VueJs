<template>
  <CabecalhoPrincipal />
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import CabecalhoPrincipal from "@/components/CabecalhoPrincipal.vue";

export default {
  name: "App",
  components: {
    CabecalhoPrincipal,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}
</style>
