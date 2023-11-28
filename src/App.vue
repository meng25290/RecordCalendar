<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// default css
import "@/assets/css/index.css";

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
  },
  created() {
    this.$store.commit('autoLoad', this.$moment);

    // 自动更换到下一年
    this.$store.commit('changeBirthdayYear', this.$moment);
    setInterval(() => {
      this.$store.commit('changeBirthdayYear', this.$moment);
    }, 1 * 1 * 1 * 1000);
    // h * m * s * 1000

    if (this.$moment().diff(localStorage.getItem('birthdayDataSave'), 'days')) {
      this.$message.error(this.$t('app.threeDays'));
    }
  },
}
</script>

<style>
#app {
  min-width: 1024px;
  /* min-height: 512px; */
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
