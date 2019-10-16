<template>
    <div class="page">
      <ul class="nav">
          <router-link v-for="(item,index) in user_data" :key="index" :to="'/user/'+item.id">{{item.username}}</router-link>
      </ul>
      <div v-if="userInfo">
          用户名：{{userInfo.username}}<br>
          等级：{{userInfo.level}}
      </div>
      <div class="hei"></div>
    </div>
</template>
<script>
    let userData = [
  {
    id: '1',
    username: 'nodeing1',
    level: 'vip1'
  },
  {
    id: '2',
    username: 'nodeing2',
    level: 'vip1'
  },
  {
    id: '3',
    username: 'nodeing3',
    level: 'vip2'
  },
  {
    id: '4',
    username: 'nodeing4',
    level: 'vip3'
  }]
    export default{
        data(){
            return{
               user_data:userData,
            //    userInfo:null
            }
        },
        beforeRouteUpdate(to,from,next){
            // console.log(to)用这个函数查找下一跳信息
            // this.userInfo=this.user_data.filter((item)=>item.id === to.params.id)[0]
            // console.log(this.userInfo)通过观察找到id存在的路径，userinfo得到的数组我们需要的是第一个对象加上[0]
            next() 
        },
        watch: {
            // $route(){
                // console.log(this.$route)用这个方式找到id之后操作类似
            // }
        },
        props:['id'],
        computed: {
            userInfo(){
                return this.user_data.filter((item)=>item.id === this.id)[0]
            }
        },
    }
   
</script>
<style scoped>
.nav a  {
        text-decoration: none;
        display: inline-block;
        padding-right: 20px;
    }
.hei{
  height: 800px;
  width: 1300px;
  background-color: cadetblue;
}
</style>