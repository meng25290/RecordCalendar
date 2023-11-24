<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// default css
import "@/assets/css/index.css"

export default {
  name: 'App',
  data() {
    return {
    }
  },
  mounted() {
    // i18n语言自动切换
    // i18n auto language switch
    let lang = navigator.language;
    if (lang) {
      this.$i18n.locale = lang;
    } else {
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style>
#app {
  min-width: 768px;
  min-height: 512px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
