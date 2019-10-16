<template>
    <div class="page">
        <shopping-car></shopping-car>
        <ul>
            <goods-item></goods-item>
        </ul>
    </div>
</template>
<script>
    import Goodsitem from '@/components/Goods/Goodsitem'
    import shoppingcar from '@/components/Goods/shoppingcar'
    export default{
        data(){
            return{
    
            }
        },
        components:{
            'goods-item':Goodsitem,
            'shopping-car':shoppingcar
        }
    }
   
</script>
<style scoped>
    
</style>