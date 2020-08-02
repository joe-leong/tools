<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <date-com/>
  </div>
</template>

<script>
import dateCom from '@/components/date'
export default {
  name: 'App',
  components: {
    dateCom
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
