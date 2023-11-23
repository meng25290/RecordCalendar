<template>
  <div id="app">
    {{ $t('index.hello') }}
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  mounted() {
    //通过浏览器自动切换国际化语言版本
    console.log("语言：" + navigator.language);
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
