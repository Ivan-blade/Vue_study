# Vue_study
### 相关教程连接
+ http://book.nodeing.com/
    + http://book.nodeing.com/vue-guide
+ https://cn.vuejs.org/v2/guide/


###  安装
+ 安装nodejs
    ```
        node -v
        验证node版本检查是否安装成功
    ```
+ 安装vue
    ```
        npm install -g vue
        vue -V
        验证vue版本验证安装是否成功
    ```
+ 搭建vue开发环境，安装vue脚手架工具(2.x)(也可以安装3.x或者4.x，貌似命令向下兼容)
    ```
        npm install --global vue-cli
        或者
        cnmp install --global vue-cli
        （cnmp安装命令：npm install -g cnpm --registry=https://registry.npm.taobao.org）
    ```
+ 搭建项目 
    + cd进一个目录作为工作目录
        ```
            cd xxx
        ```
    + 在工作目录中创建一个项目
        ```
            vue init webpack vue-demo01(项目名)
            如果项目创建失败
            nmp install
            另一种简单的创建方法(这个启动方式会提醒)
             vue init webpack-simple vue-demo01
        ```
    + cd进创建好的项目
        ```
            cd vue-demo01
        ```
    + 执行
        ```
            npm run dev
        ```

+ 3.x脚手架
    ```
        日。。。有3.x为什么一开始要装2.x
        npm uninstall -g vue-cli
        卸载当前cli工具
        npm install -g @vue/cli
        安装3.x脚手架(现在可能直接就是4.x了)
    ```
    + 启动方式
    ```
        cd进目录
        vue create demo(项目名)
        这边会有一系列选项暂不补充看着选。。。
        创建完成之后cd进入项目运行查看demo
        npm run serve 运行
        npm run build 编译
    ```

### vue启动jpg（这边用到跨域请求再看，建议直接跳过）
+ vue-resource（请求数据官方）
    ```
        安装：npm install vue-resource --save
        main.js:引入vue-resource
        import VueResource from 'vue-resource'
        使用vue-resource：Vue.use(Vueresource)
        github搜vue-resource点击进入教程
    ```

+ axios（请求数据第三方）
    ```
        github搜索axios
        哪里用哪里引入：import Axios from 'axios'
    ```

+ fetch josnp(比axios请求数据的种类多一点)

+ 父子组件传值
    ```
        父组件定义标签和传值变量名:
        <v-son :title="title" :homemsg="homemsg"></v-son>
        自组价通过props列表接收传值变量名：
        props:['title','homemsg']
    ```

+ 父组件主动获取子组件的数据和方法
    ```
        1.调用子组件的时候定义一个ref
            <v-son ref="son"></v-son>
        2.在父组件里通过
            this.$refs.son.属性
            this.$refs.son.方法
    ```

+ 子组件主动获取父组件的数据和方法
    ```
            this.$parent.属性
            this.$parent.方法
    ```
+ vue-router
    ```
        1.安装
        npm install vue-router --save
        2.引入并实例化
        import VueRouter from 'vue-router'
        Vue.use(VueRouter)
    ```
+ github搜下面的
+ element(pc组件库)
+ mint(移动端组件库)
+ 如果github官网中示例无法执行，下载源码包之后点击example/pages导入进项目
+ 创建项目时必须选择saas

+ element食用教程
    <img src="./img/element.png">

+ 事件修饰符
    ```
        <a href='https://www.baidu.com' v-on:click.prevent>百度一下</a>
        .prevent可以防止默认行为（如链接跳转）
        .stop可以防止冒泡
        .capture可以防止捕获行为
        （捕获行为即由外层标签向内层标签传递的行为，冒泡即内层标签向外层标签传递的行为）
        .self事件源是自身的时候触发
        .once事件只触发一次
    ```
+ 按键修饰符
    ```
        <input type="text" v-on:keyup.enter="func">
        按下回车键会触发func方法
        .enter代表回车
        .tab
        .delete
        .esc
        .space
        .up
        .down
    ```
+ 系统修饰符
    ```
        .ctrl
        .alt
        .meta
        .shift
        <button v-on:click.ctrl="fun">点击一下</button>
        表示这个按钮需要按住ctrl点击才有用
    ```

+ 常用指令
    + v-text
        ```
            <p v-text="{{message}}"></p>
            渲染文本
        ```
    + v-html
        ```
            <div v-text="{{message}}"></div>
            message中数据将会被当成html语言解析
        ```
    + v-show
        ```
            根据表达式的值确认是否显示
            <p v-show="flag">hello vue</p>
            flag变量的对错觉得hello是否显示
        ```
    + v-if
        ```
            <p v-if="num > 90">优秀</p>
            <p v-else-if="num > 80">良好</p>
            <p v-else-if="num > 70">差不多</p>
            <p v-else="num < 60">不及格</p>
        ```
    + v-for
        ```
            <ul>
                <li v-for="item in arr">{{item}}</li>
            </ul>
            
            new Vue({
                el:"#app",
                data(){
                    arr:['first','second','third']
                }
            })
        ```
    + 数组操作
        + 非变异方法
            执行后数据渲染不会被浏览器同步
        + 变异方法
            执行后数据渲染会被同步
            ```
                .push(x):数组后添加一个元素
                .pop():删除数组最后一个元素
                .shift():删除数组第一个元素
                .unshift(x):在数组第一个位置添加元素
                .splice(x,y,z,z,z):从序号x开始删除y个元素,从第三个位置开始表示插入元素的值
                .sort():排序，需要传入排序函数
                降序：this.arr.soft((a,b)=>{return a < b})
                .reverse():顺序反转
            ```
    + 对象属性
        + 与数组操作一样采用常规修改浏览器不会同步渲染，一般采用set和delete来修改对象属性
        + example
            ```
                vm.$set(this.obj,"num",20)
                vm.$delete(this.obj,"id")
                
            ```
    
    + v-on
        ```
            绑定事件，简写如：@click
        ```
    + v-bind
        ```
            <a v-bind:href="url">百度一下</a>
            url:'https://www.baidu.com'
            <img v-bind:src="url" />
            url='....'
            或者
            <a v-bind:href="'https://www.baidu.com'">百度一下</a>
            简写<a :href="url">百度一下</a>
        ```
    + v-model
        ```
            <input type="text" v-model="val">
            <p>{{val}}</p>
            双向绑定，更改表单数据，p标签数据也会更改
        ```
    + v-pre
        ```
            <p v-pre>{{data}}</p>
            在浏览器中会显示{{data}}而不是data所代表的变量
        ```
    + v-cloak
        ```
            结合css防止出现vue初始化之前展示变量名
            <p v-cloak>{{data}}</p>
            <style>
                [v-vlock]{
                    display:none;
                }
            </style>
            <p v-text>{{data}}</p>
            v-text虽然也有类似效果但是作用范围不大，在隐藏数据较少的情况下可以用v-text，数据量较大的时候用v-cloak

        ```
    + class绑定
        ```
            <div :class="cbox"></div>
            cbox为在data中定义的变量，用以动态调整样式
            <div :class="[cbox,dbox]"></div>
            当想要赋予多种样式时可以用数组形式绑定
            <div :class="{cbox:isActive}"></div>
            isActive为布尔型变量，需要在data中定义并用方法初始化
            注意这边的大括号中cbox不是变量而是具体的样式名
        ```
    + style绑定
        ```
            <div :style="{width:'200px',height:'200px',backgroundColor:'red'}"></div>
            属性值用引号包含表示变量，style中通过-连接的属性该为分割首字母大写的格式
            background-color改为backgroundColor
        ```
        ```
            以上方法不推荐，主要推荐这个方法
            data中定义变量
            objstyle:{
                width:'200px',
                height:'200px',
                backgroundColor:'red'
                }
            然后引用
            <div :style="objstyle"></div>
            与class一样style也可以用数组形式同时引用多个变量
            <div :style="[objstyle1,objstyle2]"></div>
        ```
    + 表单输入绑定
        ```
            data定义变量：message:"hello vue"
            引用：<input type="text" v-model="message" >

        ```
    + 单选框
        ```
            data定义变量：pick:"" 
            value:选择后提示
            name用来传输数据到后台
            <input type="radio" value="male" v-model="pick" name="sex">
        ```
    + 多选框
        ```
            data定义变量：select_one:"" 
            <select v-model="select_one">
                <option value="" disabled>请选择地址</option>
                <option value="" >北京</option>
                <option value="" >广州</option>
                <option value="" >深圳</option>
            </select>
            这里因为value没有赋值，所以选择之后并不会有相应打印结果
        ```
    + 复选框
        ```
            data定义变量：check_one:[]
            <input type="checkbox" v-model="check_one" value="1">
            <input type="checkbox" v-model="check_one" value="1">
            <input type="checkbox" v-model="check_one" value="1">

        ```
    + 修饰符扩
        ```
            data定义num1:1，num2:2
            <input type="text" v-model.number="num1">+
            <input type="text" v-model.number="num2">
            = {{num1+num2}}
            不用number修饰符的话num1和num2会被当做字符串

            <input type="text" v-model.trim="num2">
            去除首尾的空格
        ```
    + 计算属性
        ```
            计算属性定义的方法不需要加（），在方法中定义计算功能需要（）
            在vue中定义compute类型变量
            new Vue({
                el:'#app',
                data:{
                    msg:"12345"
                },
                computed:{
                    msg2(){
                        return msg.split("").reverse().join("")
                    }
                }
            })
            计算属性可以被缓存提高性能，变化是依赖变量的变化而变化
            而方法函数每次都会被调用
        ```
    + 组件注册
        ```
            <div id="app">
                <ran></ran>
            </div>
            挂载组件
            <script>
                Vue.component("ran",{
                    template:"<div :style="box"></div>"
                    computed:{
                        box(){
                            return{
                                height:"300px",
                                width:"200px"
                            }
                        }
                    }
                }) 
            </script>

            定义组件
        ```
    + 父组件向子组件传值
        ```
            <div id="app">
                <input type="text" v=model="data1">
                <ran :data2="data1"></ran>
            </div>
            挂载组件
            <script>
                Vue.component("ran",{
                    template:`<div :style="box" >{{data2}}</div>`
                    computed:{
                        box(){
                            return{
                                height:"300px",
                                width:"200px"
                            }
                        }
                    },
                    props:["data2"]
                }) 
            </script>
            父组件的变量与子组件变量关联，子组件需要传值的变量用props定义
        ```
    + 子组件向父组件传递数据
        ```
            <div id="app">
                <ran :myevevt="say"></ran>
            </div>
            <script>
                Vue.component("ran",{
                    template:`<button @click="$emit('myevevt')">click</button>`
                }) 
                new Vue({
                    el:"#app".
                    methods:{
                        say(){
                            alert("hello vue")
                        }
                    }
                })
            </script>
            这里想要通过点击按钮调用子组件功能，但是功能被写在父组件里，于是只能通过间接调用，现在模板中定义方法变量，再将父组件里的功能赋值给该变量
        ```
    + template标签
        ```
            作用可以理解为批处理操作
            <template v-for="(item,i) in tabData">
                <button @click="changeTab(i)"  :class="{active: index==i}" >{{item.tabTitle}}</button>
                <div  :class="{active: index==i}">
                    <ul>
                        <li v-for="info in item.list">{{info.id}} {{info.newsTitle}}</li>
                    </ul>
                </div>
            </template> 
            示例如上图，div标签以及button标签都会执行循环，不过会影响排列，因为template不是实体节点
        ```
    + 单文件组件
        ```
            1. 引入组件
                import nickname from '.......'
            2. 包含组件
                components:{
                    'nickname2':nickname
                }
            3. 挂载组件
                <nickname2></nickname2>
            
            在单文件组件中为了防止style之间的冲突，在标签中加入scope用以限定style作用域
        ```
    + 路由概念
        ```
            一开始由后端提出后端根据不同的请求跳转到不同的url
            前端路由主要是进行不同组件之间的切换，单页应用是无刷新的，url改变对应的是组件的改变
            前端路由的作用就是通过控制不同的url路径切换不同的组件，使两者产生对应关系
        ```
    + vue-router使用
        + 引入包
            ```
                在index.js文件中
                import Vue from 'vue'
                import VueRouter from 'vue-router'
                以上两个是必要包
                import Home from '@/components/Home'
                import course from '@/components/Course'
                import vip from '@/components/vip'
                import answer from '@/components/answer'
                这是引入组件
            ```
        + 使用插件
            ```
                在index.js文件中
                Vue.use(VueRouter)
            ```
        + 创建实例应用配置
            ```
                在index.js文件中
                const router = new  VueRouter({ 
                    routes:[
                        {
                            path:'/',
                            component:Home
                        },
                        {
                            path:'/Course',
                            component:course
                        },
                        {
                            path:'/vip',
                            component:vip
                        },
                        {
                            path:'answer',
                            component:answer
                        }
                    ]
                })
            ```
        + 暴露
            ```
                在index.js文件中
                export default router
            ```
        + 将url值添加到对应的a标签
            ```
                <a href="#/Home">首页</a>
                <a href="#/Course">课程</a>
                <a href="#/vip">会员</a>
                <a href="#/answer">问答</a>
                #号必须添加
            ```
        + 渲染区域
            ```
                在入口文件(app.vue)中引入
                <router-view></router-view>
                组件渲染内容会填充在该区域
            ```
    + hash和history
        + 模式调用
            ```
                在创建路由示例的模块加入下列语句之一就可以切换模式，默认是hash
                当模式为history时，a标签url中的‘#’应该删除
                 const router = new  VueRouter({ 
                    mode:'history',
                    routes:[
                        {
                            path:'/',
                            component:Home
                        },
                    ]
                })

            ```
        + hash
            ```
                hash特点是'#'+字符串构造url，无刷新
            ```
        + history
            ```
                history一般直接通过目录构造不带有#
                history方式会通过back,forward,go等方式实现页面跳转，会请求后端接口
                在h5中history增加了两个方式达到前端路由不刷新的效果pushState和replaceState
            ```
    + router-link
        + 配置
            ```
                在入口文件中a标签可以替换为router-link,以下示例
                原本：
                <a href="#/Home">首页</a>
                <a href="#/Course">课程</a>
                <a href="#/vip">会员</a>
                <a href="#/answer">问答</a>
                替换后
                <router-link to="/Home">首页</router-link>
                <router-link to="/Course">课程</router-link>
                <router-link to="/vip">会员</router-link>
                <router-link to="/answer">问答</router-link>
                router-link在跳转时会自动加上#
            ```
        + 动态绑定
            ```
                <router-link :to="home">首页</router-link>
                data(){
                    return{
                        home:'/Home'
                    }
                }
            ```
        + tag
            ```
                router-link默认渲染成a标签，通过tag可以渲染成其他属性
                <router-link to="/vip" tag="button">会员</router-link>
                会员将会被渲染成一个button按钮，点击触发
                <router-link to="/vip" tag="div">会员</router-link>
                会员将会被渲染成一个div板块，点击触发
            ```
        + event
            ```
                默认点击事件，通过event可以更改为划入划出事件或者其他事件
                 <router-link to="/Home" event="mouseover">首页</router-link>
                 <router-link to="/Home" event="otherevent">首页</router-link>
            ```
        + 样式
            + 局部样式
                ```
                    <router-link to="/Home" event="mouseover" active-class="style_someone">首页</router-link>   
                ```
            + 全局样式
                ```
                    index.js文件下
                    const router = new  VueRouter({ 
                    linkActiveClass:'activeclass'
                    })
                    入口文件app.vue下
                    定义style样式
                    .activeclass{
                        background-color:white;
                    }
                ```
            + 注意
                ```
                    全局样式的优先级没有局部样式高，只要写了局部样式class，即使没有写style也不会引用全局样式
                ```
        + 匹配
            + 模糊匹配
                ```
                    默认匹配方式
                ```
            + 精确匹配
                ```
                    <router-link to="/Home" exact>首页</router-link>
                    加入exact关键字就ok了
                ```
    + 嵌套路由
        ```
            以vip板块的会员等级为例
            vip文件下
            <template>
                <div id='vip'>
                    <h2>{{msg}}</h2>
                    <div>
                        <ul>
                            <router-link tag="li" to="/first"><a href="">一级会员</a></router-link>
                            <router-link tag="li" to="/second"><a href="">二级会员</a></router-link>
                            <router-link tag="li" to="/third"><a href="">三级会员</a></router-link>
                        </ul>
                    </div>
                </div>
            </template>
            index.js下引入
                import first from '@/components/singles/first'
                import second from '@/components/singles/second'
                import third from '@/components/singles/third'
            index.js下
            export default new Router({
            routes: [
                        {
                            path:'/vip',
                            component:vip,
                            children:[
                            {
                                path:'first',
                                component:first
                            },
                            {
                                path:'second',
                                component:second
                            },
                            {
                                path:'third',
                                component:third
                            }]
                        }
                    ]
            })
        ```
    + 命名路由
        ```
            入口文件下
            <router-link :to="{name:'wd'}">问答</router-link>
            index.js文件下
            export default new Router({
            routes: [
                        {
                            path:'/vip',
                            component:vip,
                            name:'wd'
                        }
                    ]
            })
        ```
    + 命名视图
        ```
            index.js引入文件
                import home_left from '@/components/singles/Home_left'
                import home_right from '@/components/singles/Home_right'
            index.js下
                export default new Router({
                routes: [
                    {
                        path:'/',
                        components:{
                            default:Home,
                            left:home_left,
                            right:home_right
                        }
                    }
                }
            入口文件下
                <div class="main">
                    <router-view name="left"></router-view>
                    <router-view name="right"></router-view>
                </div>
        ```
    + 重定向
        + 概述
            ```
                一个发向a的请求被委托被b
            ```
        + 配置
            ```
                1.重定向字符串路由
                {
                    path:'now',
                    redirect:'/'
                }
                将访问now地址的请求定向回根
                2.重定向对象
                {
                    path:'now'
                    redirect:{name:'wd'}
                }
                将访问now地址的请求定向到name=wd的路由下
                3.给方法
                不赘述。。。
            ```
        + 别名
            ```
                routes: [
                    {
                        path:'/',
                        alias:'/now',
                        component:home
                    }
                }
                访问/和now的地址都会转向home组件
            ```
    + 编程式导航
        + 概述
            ```
                声明式导航特点是需要在  template  中写跳转链接，通过生成a标签跳转

                而编程式导航是通过在  js  中编写代码来实现导航切换。常用方式：back,forward,go,push,replace
            ```
        + push
            ```
                想要导航到不同的url，则使用router.push方法，这个方法会向history中添加一个新的记录
                <div class="main">
                    <h1>编程式导航</h1>
                        <p><button @click="push_test">push</button></p>
                        <router-view name="left"></router-view>
                        <router-view name="right"></router-view>
                </div>
                 methods: {
                        push_test(){
                            this.$router.push('/answer')
                        } 
                通过点击按钮可以实现跳转,而且浏览器会记录当前url可以回退跳转
            ```
        + replace
            ```
                想要导航到不同的url，则使用router.replace方法，这个方法不会向history中添加记录
                <div class="main">
                    <h1>编程式导航</h1>
                        <p><button @click="replace_test">replace</button></p>
                        <router-view name="left"></router-view>
                        <router-view name="right"></router-view>
                </div>
                 methods: {
                        push_test(){
                            this.$router.replace('/vip')
                        } 
                通过点击按钮可以实现跳转,而且浏览器不会记录当前url，只能回退跳转当前url上一次所在页面
            ```
        + back
            ```
                后退到上一个页面（即使通过replace访问的页面也会被跳转）
            ```
        + forward
            ```
                前进到下一个记录
            ```
        + go
            ```
                go_test(){
                    this.$router.go(-1)
                }
                go方法可以访问前后记录，并且不需要逐步访问
            ```
    + 动态路由匹配
        + 概述
            ```
                当url变化后，我们仍希望用同一个组件渲染
                应用场景，当用户的id不同时访问了不同的url但是看见的是同一个渲染界面
            ```
        + 操作
            ```
                user组件渲染
                <template>
                    <div class="page">
                    <ul class="nav">
                        <router-link v-for="(item,index) in user_data" :key="index" :to="'/user/'+item.id"><a>{{item.username}}</a></router-link>
                    </ul>
                    </div>
                </template>
                index.js路径
                {
                    path:'/user/:id?',
                    component:user
                }
                :id被认为是动态路径参数
                该路径表示如果/user/后面匹配到id也会将它跳转到对应url，？是正则表达，如果匹配不到id也进行跳转
            ```
    + 监听动态参数
        + beforeRouteUpdate
            ```
                详细参考user.vue
                beforeRouteUpdate(to,from,next){
                // console.log(to)用这个函数查找下一跳信息
                this.userInfo=this.user_data.filter((item)=>item.id === to.params.id)[0]
                // console.log(this.userInfo)通过观察找到id存在的路径，这边id参数在0下面
                next() 
                }
                next（）让程序正常跳转
            ```
    + 路由组件传参
        + 概述
            ```
                在组件中使用$route会使url和组件高度耦合导致组合只能在特定的url上使用，我们需要通过传参将组件和路由解耦，需要props
            ```
        + 应用
            ```
                index.js下
                 {
                    path:'/user/:id?',
                    component:user,
                    props:true
                }
                user.vue下
                export default{
                    data(){
                        return{
                        user_data:userData,
                        }
                    },
                    props:['id'],
                    computed: {
                        userInfo(){
                            return this.user_data.filter((item)=>item.id === this.id)[0]
                        }
                    },
                }
            ```
    + 滚动行为
        + 概述
        ```
            scrollBehavior(to,from,savedPosition)
            to和next即是下一个和上一个
            只有在浏览器中的前进后退是记录位置的。。。一般keep-alive保活（还没学到）
        ```
        + 操作
        ```
            index.js下
            mode:'history',
            scrollBehavior (to, from, savedPosition) {
                console.log(to)
                console.log(from)
                console.log(savedPosition)
                if (savedPosition) { //如果savedPosition存在，滚动条会自动跳到记录的值的地方
                console.log(savedPosition)
                return savedPosition
                } else {
                return { x: 0, y: 0 }//savedPosition也是一个记录x轴和y轴位置的对象
                }
                },
        ```
    + 过渡效果
        + 概述
            ```
                通过<translation></translation>标签包裹
                六类
                v-enter,v-enter-to,v-enter-active
                v-leave,v-leave-to,v-leave-active
            ```
        + 操作
            ```
                <transition mode="out-in">
                    <router-view></router-view>
                </transition>
                .v-enter{
                    transform: translateX(-100%);
                }
                .v-enter-to{
                    transform: translateX(0);
                }
                .v-enter-active{
                    transition: 1s;
                }
                .v-leave{
                    transform: translateX(0);
                }
                .v-leave-to{
                    transform: translateX(100%);
                }
                .v-leave-active{
                    transition: 1s;
                }
                标签包裹之后直接写class，名称固定
                out-in：先离开后进入
                in-out:先进入再离开

                name属性
                 <transition mode="out-in" name="best">
                    <router-view></router-view>
                </transition>
                .best-leave-active{
                    transition: 1s;
                }
                更改name之后v需要替换成name
            ```
    + 全局钩子
        + beforeEach
        ```
            {
                path:'/vip',
                component:vip,
                meta:{
                    require:true
                }
            }
            router.beforeEach((to,from,next) => {
            console.log('进入路由前'+to.meta)
            if(to.meta.require)
                {
                    //need to login in
                    alert('请登录！')
                }else
                {
                    next()
                }
            })

            这边需要注意钩子应该在vue创建前的位置，所以默认的创建方式可能不会成功
            推荐使用
            const router = new VueRouter({})
            router.beforeEach()
            export defalut router
            next()方法用于退出
        ```
        + afterEach
        ```
             router.beforeEach((to,from) => {})
        ```
    + 写进路由记录中的钩子
        ```
            {
                path:'/Course',
                component:course,
                beforeEnter(to,from,next){
                    alert('course start!')
                    next()
                }
            }
        ```
    + 写进组件的钩子
        ```
            beforeRouteEnter和beforeRouteLeave这边只举一例
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
        ```
### axios
+ 概述
    ```
        一个基于promise用于浏览器和nodejs的http客户端
        作用：发送请求与后端交互
        npm install axios --save

        在组件中导入
        import axios from 'axios'
    ```
+ 组件中使用get方式请求数据
    ```
        index.js中导入

    ```
    ```
        export default{
            data(){
                return{
                
                }
            },
            created() {
                axios({
                    method:'get',
                    url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list',
                }).then((response)=>
                {
                    console.log(response)
                })
            }
        }
        get方式，因为是默认请求方式所以也可以这样：
        export default{
            data(){
                return{
                
                }
            },
            created() {
                axios('https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list')
                .then((response) => console.log(response))
            }
        }
    ```
+ mock概述
    ```
        虚拟数据接口
        easy-mock:https://easy-mock.com
        mockjs文档：https://github.com/nuysoft/Mock/wiki
        mockjs案例：http://mockjs.com/examples.html

    ```
+ post请求
    ```
        export default{
            data(){
                return{
                
                }
            },
            created() {
                axios({
                    method:'get',
                    url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add',
                }).then((res)=>
                {
                    console.log(res)
                })
            }
        }
        post和get请求需要的模拟接口类型不同（好吧，废话）
    ```
+ 报错处理
    ```
        axios('https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list')
            .then((response) => console.log(response)
            ).catch((err)=>
            {
                console.log(err)
            })
    ```
+ 传参
    + get方式传参
        ```
            axios({
                    method:'get',
                    url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list',
                    params:{
                        title:'xxx',
                        count:30
                    }
                }).then((response)=>
                {
                    console.log(response)
                })
        ```
    + post方式传参
        ```
            axios({
                    method:'post',
                    url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add',
                    params:{
                        title:'xxx',
                        count:30
                    }
            })
        ```
    + 批量请求
        ```
            created:{
                function http1(){
                    return axios.get('url')
                }
                function http2(){
                    return axios.post('url')
                }
                function http3(){
                    return axios.get('url')
                }
                axios.all([http1(),http2(),http3()]).then((res)=>{
                    console.log(res[0])
                    console.log(res[1])
                    console.log(res[2])
                })
                服务器会以数组形式返回三个对象，卧槽，三个对象，想想自己一个都没有。。。
        ```
    + 分割响应结果
        ``` 
            axios.all([http1(),http2(),http3()]).then(axios.spread((res1,res2,res3)=>
            {
                console.log(res1)
                console.log(res1)
                console.log(res1)
            }))
    + 创建实例
        ```
            在js标签，创建export前创建实例HTTP
            const HTTP = axios.create({
                baseURL:'url_base'
            })
            在export中
            created() {
                HTTP.get('/xxx/xxx').then((res)=>
                {
                    console.log(res)
                })
            }
            其中get('/xxx/xxx')中是相对路径，会自动与前面的url_base拼接上

            实例中参数
            baseurl：基础url
            timeout:默认单位毫秒，超出时间停止请求
            其他参数请参照http://book.nodeing.com/
        ```
    + 拦截器
        + 概述
            ```
                可以在then和catch之前做一些预处理
            ```
        + 操作
            ```
                基于上面的HTTP实例配置（位置在创建实例后，export之前）
                HTTP.interceptors.request.use((config)=>
                {
                    console.log('jpg')
                    return config
                },(err)=>{
                    return Promise.reject(err)
                })
                request:发送前
                response:响应前
            ```
    + 全局使用axios
        ```
            安装插件
            npm install vue-axios  --save
            
            main.js下
            引入包
            import axios from 'axios'
            import VueAxios from 'vue-axios'
            Vue.use(VueAxios,axios)

            部署完成之后在局部组件使用需要加前缀this.就可以了
            created() {
                this.axios({
                    method:'get',
                    url:'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add',
                }).then((res)=>
                {
                    console.log(res)
                })
            }
        ```
    + vuex状态管理
        + 兄弟组件共享数据
            + 经典款
                ```
                    路线很明朗，子传父再传子
                    子传父
                     <button @click="$emit('addcar',num)">加入购物车</button>
                     点击时间出发传输函数，addcar是传递方法名称，用于父组件接守，num是传递参数
                     父接受
                    <goods-item @addcar="Good_num"></goods-item>
                     通过Good_num方法处理接受到的数据
                     methods: {
                        Good_num(num){
                            this.Goods_num=num 
                        }   
                    }
                    父传子
                    <shopping-car :item_num="Goods_num"></shopping-car>
                    通过绑定到item_num变量完成赋值
                    子接受即可
                    props:['item_num']
                ```
            + 流行款
                + 预备步骤
                    ```
                        npm install vuex --save

                        一般要新建一个新的文件夹用来存储vuex的配置文件
                        该文件暂命名index.js内容如下
                        
                        
                        import Vue from 'vue'
                        import Vuex from 'vuex'

                        //将vuex作为vue的插件
                        Vue.use(Vuex)

                        //创建容器
                        let store = new Vuex.Store()

                        export default store

                        之后需要在main.js中挂载
                        import store from '@/store/index.js'
                        new Vue({
                                    el: '#app',
                                    router,
                                    store,
                                    components: { App },
                                    template: '<App/>'
                                })

                        挂载完成就可以开始应用了
                    ```
                + vuex 启动
                    
                    + 传递参数包含进vuex实例中,其中state中包含的是传递参数
                        ```
                            let store = new Vuex.Store(
                                {
                                    state:{
                                        Goods_num:20
                                    }
                                }
                            )
                        ```


                    + 传递参数方写入触发方式以及方法
                        ```
                            <button @click="addcar">加入购物车</button>

                            methods: {
                                addcar(){
                                    this.$store.commit('addShopping',this.num)
                                }   
                            }
                            通过this.$store.commit()语句完成传递过程，this.num是预传递参数，addShopping可以认为是是该传递过程的代号
                            
                            
                            如果想要传递多个参数
                            this.$store.commit('addShopping',{
                                n:this.num,
                                m:20
                            })
                            或者可以更换形式
                            methods: {
                                addcar(){
                                    this.$store.commit(
                                        {
                                            type:'addShopping',
                                            n:this.num,
                                            m:20
                                        }
                                    )
                                }   
                            }
                        ```

                    + index.js中通过代号获取传递参数
                        ```
                            let store = new Vuex.Store(
                                {
                                    state:{
                                        Goods_num:20
                                    },
                                    mutations:{
                                        addShopping(state,temp_info)
                                        {
                                            // console.log(temp_info)
                                            state.Goods_num = temp_info
                                        }
                                    }
                                }
                            )

                            需要该参数的组件只需要引用就好如下
                            <h2>目前选中{{this.$store.state.Goods_num}}件商品</h2>

                            如果是如上多参的情况下修改如下
                            state.Goods_num = temp_info.n
                        ```
        + 核心概念及其他细节
            + 参数变换
                ```
                在vuex当中唯一能够更改store状态的方法是mutation，其他可能生效的方法多半因为没有开启严格模式
                ```
            + mutation
                <br>mutation中不能写入异步方法

            + action
                ```
                    可以用来提交异步代码，但是action不能直接改变store状态，需要将数据传递给mutation间接改变
                ```
                + 在需要数据的组件中定义接受方式
                    ```
                        methods: {
                            addcar(){
                                this.$store.dispatch('addAction',this.num)
                            }   
                        }
                        addcar方式触发数据传输事件，目标为对象为addAction
                    ```
                +  在index.js中定义action
                    ```
                        let store = new Vuex.Store(
                            {
                                state:{
                                    Goods_num:0
                                },
                                mutations:{
                                    addShopping(state,payload)
                                    {
                                        state.Goods_num = payload
                                    }
                                },
                                actions:{
                                    addAction(context,payload){
                                        setTimeout(()=>{
                                            context.commit('addShopping',payload)
                                        },1000)
                                    }
                                }
                            }
                        )
                        使用setTimeout方法作为异步操作，传送数据代号addShopping,action方法addAction接受到数据并传递给mutation方法改变store状态
                    ```
        + getter
            + 概述
                ```
                    类似于定义一个全局方法减少不同组件之间的重复代码
                ```
            + 操作
                ```
                    index.js下通过getters对store中某个变量做方法处理
                    let store = new Vuex.Store(
                        {
                            state:{
                                Goods_num:0
                            },
                            mutations:{
                                addShopping(state,payload)
                                {
                                    state.Goods_num = payload
                                }
                            },
                            getters:{
                                get_num(state){
                                    return state.Goods_num > 25 ? 25 : state.Goods_num
                                }
                            }
                        }
                    )
                    shoppingcar下渲染即可，其他子组件下也可以直接使用该方式渲染
                     <h2>目前选中{{num}} | {{this.$store.getters.get_num}}件商品</h2>
                ```
        + 辅助函数
            + 概述
                ```
                    简化写法
                ```
            + mapState
                ```
                    这个函数与computed函数形成映射

                    在需要用到的组件中引入
                    import {mapState} from 'vuex'
                ```
