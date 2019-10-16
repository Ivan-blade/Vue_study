<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'这是课程板块'
            }
        },
        beforeRouteEnter: (to, from, next) => {
            alert('course start!')
            next()
        }
    }
    
</script>