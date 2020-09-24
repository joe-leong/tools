<template>
  <div id="app" >
    <!-- <date-com/> -->
    <media-icon></media-icon>
  </div>
</template>

<script>
import dateCom from '@/components/date'
export default {
  name: 'App',
  components: {
    dateCom
  },
  mounted () {
    this.$request({name:'getList',params:{id:'aaa'}}).then(res=>{
      console.log(res);
    })
  },
  data() {
    return {
      path: 'http://qgzyeswca.hn-bkt.clouddn.com/icon-online_focus.png'
    }
  },
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
