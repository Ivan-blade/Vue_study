<template>
    <div class="page">
        <button @click="num--">-</button><input v-model="num" type="text"><button @click="num++">+</button>
        <button @click="addcar">加入购物车</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
              num:20 
            }
        },
        methods: {
            addcar(){
                this.$store.commit('addShopping',this.num)
                // this.$store.dispatch('addAction',this.num)
            }   
        }

    }
   
</script>
<style scoped>
    
</style>