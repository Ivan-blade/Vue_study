<template>
    <div class="page">
        <h2>目前选中{{num}} | {{this.$store.getters.get_num}}件商品</h2>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        // props:['car_num'],
        computed: {
            num(){
                return this.$store.state.Goods_num
            }
        }
    }
   
</script>
<style scoped>
    
</style>