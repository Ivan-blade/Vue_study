import Vue from 'vue'
import Vuex from 'vuex'

//将vuex作为vue的插件
Vue.use(Vuex)

//创建容器
let store = new Vuex.Store(
    {
        state:{
            Goods_num:0
        },
        mutations:{
            addShopping(state,payload)
            {
                // console.log(temp_info)
                state.Goods_num = payload
            }
        },
        // mutations:{
        //     addShopping(state,temp_info)
        //     {
        //         // console.log(temp_info)
        //         state.Goods_num = temp_info
        //     }
        // },

        // actions:{
        //     addAction(context,payload){
        //         setTimeout(()=>{
        //             context.commit('addShopping',payload)
        //         },1000)
        //     }
        // }
        getters:{
            get_num(state){
                return state.Goods_num > 25 ? 25 : state.Goods_num
            }
        }
    }
)

export default store