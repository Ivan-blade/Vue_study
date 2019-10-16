<template>
    <div  class="page">
       <h2>{{msg}}</h2>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'this is header'
            }
        }
    }
   
</script>
<style scoped>
    .page h2{
        margin:0;
        padding:20px;
        height:60px;
        text-align:center;
        background-color:orange;
    }
</style>