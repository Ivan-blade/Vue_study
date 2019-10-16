<template>
    <div  class="page">
       <h2>{{msg}}</h2>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'this is content'
            }
        }
    }
   
</script>
<style scoped>
    .page h2{
        margin:0;
        padding:10px;
        height:70px;
        text-align:center;
        background-color:white;
    }
</style>