<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <v-home></v-home> -->
    <!-- <v-header></v-header> -->
    <!-- <v-content></v-content> -->
    <!-- <router-view/> -->
    <div class="header">
        <!-- <a href="#/Home">首页</a>
        <a href="#/Course">课程</a>
        <a href="#/vip">会员</a>
        <a href="#/answer">问答</a> -->
        <router-link to="/">首页</router-link>
        <router-link to="/Course">课程</router-link>
        <router-link to="/vip">会员</router-link>
        <router-link to="/answer">问答</router-link>
        <router-link to="/user">用户</router-link>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <div class="main">
      <p><button @click="push_test">push</button></p>
      <p><button @click="replace_test">replace</button></p>
      <p><button @click="back_test">back</button></p>
      <p><button @click="forward_test">forward</button></p>
      <p><button @click="go_test">go</button></p>
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </div> -->
  </div>
</template>

<script>
// import myHome from '@/components/singles/Home.vue'
// import myHeader from '@/components/singles/myHeader.vue'
// import myContent from '@/components/singles/myContent.vue'
export default {
  name:'app',
  components:{
    // 'v-myHome':myHome,
    // 'v-header':myHeader,
    // 'v-content':myContent
  },
  methods: {
   push_test(){
     this.$router.push('/answer')
   },
   replace_test(){
     this.$router.replace('/vip')
   },
   back_test(){
     this.$router.back()
   },
   forward_test(){
     this.$router.forward()
   },
   go_test(){
     this.$router.go(-1)
   }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{
    margin:0;
  }
  #app .header{
    background-color:#2c3e50;
    height: 50px;
  } 
  #app .header a{
    text-decoration: none;
    color: aliceblue;
    margin: 10px;
    padding: 8px,10px;
    display: inline-block;
    font-size: 25px;
  }
  .main{
      height: 500px;
      background-color: azure;
  }
  .main button{
    padding: 8px,40px;
  }
  .activeclass{
      background-color:paleturquoise;
  }
  .v-enter{
    transform: translateX(-100%);
  }
  .v-enter-to{
    transform: translateX(0);
  }
  .v-enter-active{
    transition: 1s;
  }
  /* .v-leave{
    transform: translateX(0);
  }
  .v-leave-to{
     transform: translateX(100%);
  }
  .v-leave-active{
    transition: 1s;
  } */
</style>
