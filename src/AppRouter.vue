<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #292929;
}

#nav a {
  font-weight: bold;
  color: #292929;
}

#nav a.router-link-exact-active {
  color: #292929;
}
</style>
