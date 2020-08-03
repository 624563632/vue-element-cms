<template>
  <div class="app">
    <!-- 这个容器，只给Login组件用 -->
    <!-- 登录页面 -->
    <router-view name='login' v-if='$route.path=="/login"'></router-view>

    <!-- 系统内部页面 -->
    <Layout v-else></Layout>


  </div>
</template>

<script>

import { Layout } from '@/components'
export default {
  name: 'App',
  components: {
    Layout
  },
  computed: {
    isLogin() {
      return localStorage.getItem('token') ? true : false
    }
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
