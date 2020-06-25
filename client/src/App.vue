<template>
  <div id="app">
    <div id="nav">
      <router-link to="/welcome">Welcome</router-link>
      <router-link to="/chat">Chat</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  background-color: #2e2e2e;
  border: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  width: 100vw;
  height: 10vh;
  text-align: center;
}
</style>
