<template>
  <div id="app">
    <app-chat></app-chat>
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";
export default {
  name: "App",
  components: {
    "app-chat": Chat
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  background-color: #98a1a6;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
