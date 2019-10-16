<template>
    <div class="page">
        <h2>axios sample</h2>
    </div>
</template>
<script>
    import axios from 'axios'
    const HTTP = axios.create({
        baseURL:'url_base'
    })
    export default{
        data(){
            return{
               
            }
        },
        created() {
            HTTP.get('/xxx/xxx').then((res)=>
            {
                console.log(res)
            })
            //  axios({
            //         method:'get',
            //         url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list',
            //         params:{
            //             title:'xxx',
            //             count:30
            //         }
            //     }).then((response)=>
            //     {
            //         console.log(response)
            //     }).catch((err)=>
            // {
            //     console.log(err)
            // })

            // axios({
            //         method:'post',
            //         url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add',
            //         data:{
            //             title:'xxx',
            //             count:30
            //         }
            // }).then((res)=>
            // {
            //     console.log('post:' + res)
            // }).catch((err)=>
            // {
            //     console.log(err)
            // })
        }
    }
   
</script>
<style scoped>
    
</style>