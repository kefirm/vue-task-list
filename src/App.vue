<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/layout/Header';
  export default {
    name: "app",
    components: {
    Header
    }
  }
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #165010;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffda4e;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
