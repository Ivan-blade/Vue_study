<template>
    <div id='vip'>
        <h2>{{msg}}</h2>
        <div>
            <ul >
                <router-link tag="li" to="/vip/first"><a href="">一级会员</a></router-link>
                <router-link tag="li" to="/vip/second"><a href="">二级会员</a></router-link>
                <router-link tag="li" to="/vip/third"><a href="">三级会员</a></router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        el:'#vip',
        data(){
            return{
                msg:'这是vip板块'
            }
        }
    }
    
</script>

<style scoped>
    ul,li{
    margin:0;
    padding: 0;
    }
    li{
        float:left;
        margin-left: 30px;
        width: 200px;
        height:200px;
        list-style: none;
        background-color: beige;
        
    }
    a{
        text-decoration: none;
        display: block;
        width: 200px;
        height:200px;
        line-height: 200px;
        text-align: center;
        color: cadetblue;
    }
    
</style>