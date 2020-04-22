const App = {
    data (){
       return {
        contentStyleObj:{
          height:''
        }
      }
    },
    template: `
      <div>
        <header class="head">
          <h4>个人资料导航</h4>
        </header>
  
        <div class="content" :style="contentStyleObj">
          <nav class="nav-page">
              <ul>
                  <li><router-link to='/open'>开发社区</router-link></li>
                  <li><router-link to='/code'>代码文档</router-link></li>
                  <li><router-link to='/tool'>在线工具</router-link></li>
                  <li><router-link to="/contact">联系作者</router-link></li>
              </ul>
          </nav>
          <div class="content-page">
            <router-view />
          </div>
        </div>
      </div>
    `,
    components:{
    },
    
    methods:{
      getHeight(){
        this.contentStyleObj.height=window.innerHeight-35+'px';
      }
    },
    
    created(){
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    },
    
    destroyed(){
      window.removeEventListener('resize', this.getHeight)
    }
}

const Open = {
  data() {
    return {
      list:[
        {id: 1, img: 'images/Juejin.png', names: '掘金', url:'https://juejin.im/', datas: '掘金是一个帮助开发者成长的社区。'},
        {id: 2, img: 'images/yinjzhongwen.png', names: '印记中文', url:'https://www.docschina.org/', datas: '深入挖掘国外前端新领域，为中国 Web 前端开发人员提供优质文档！'},
      ]
    }
  },
  template:`
    <div class="content-back">
      <h1>开发社区：</h1>
      <div class="content-div"  v-for="item in list" :key='item.id'>
        <a :href='item.url' :alt='item.datas'><img :src="item.img" alt="" />     
          {{item.names}}
          <p>{{item.datas}}</p>
        </a>
      </div>
    </div>
  `,
}

const Code = {
  data() {
    return {
      list:[
        {id: 1, img: 'images/vue.png', names: 'Vue.js', url:'https://cn.vuejs.org/', datas: 'Vue.js渐进式JavaScript 框架'},
        {id: 2, img: 'images/MDN.png', names: 'MDN Web 文档', url:'https://developer.mozilla.org/zh-CN/', datas: 'MDN 的一切（文档和网站本身）都是由一个开放的开发者社区创造。'},
      ]
    }
  },
  template:`
    <div class="content-back">
      <h1>代码文档：</h1>
      <div class="content-div"  v-for="item in list" :key='item.id'>
        <a :href='item.url' :alt='item.datas'><img :src="item.img" alt="" />     
          {{item.names}}
          <p>{{item.datas}}</p>
        </a>
      </div>
    </div>
    `
}

const Tool = {
  data() {
    return {
      list:[
        {id: '1', img: '', names: '菜鸟工具', url:'http://c.runoob.com/', datas: '各种实用工具直接在线使用'},
      ]
    }
  },
  template:`
    <div class="content-back">
      <h1>在线工具：</h1>
      <div class="content-div"  v-for="item in list" :key='item.id'>
        <a :href='item.url' :alt='item.datas'><img :src="item.img" alt="" />     
          {{item.names}}
          <p>{{item.datas}}</p>
        </a>
      </div>
    </div>
    `
}

const Contact = {
  template:`
    <div  class="content-back">
      <h2>不制作了，找不到前端工作，找别的去了</h2>
      <h2>如有需要联系我的，请加qq2216148231，请备注原因！</h2>
      <h2>2020.4.22  14:51:21</h2>
    </div>
  `
}

const router = new VueRouter({
    routes: [
        {
          path: '',
          component: App,

          children: [
            {path:'', component: Open},
            {path:'/open', component: Open},
            {path:'/code', component: Code},
            {path:'/tool', component: Tool},
            {path:'/contact', component: Contact},
          ]
        }
    ]
})

const vm = new Vue({
    el: '#main',
    data: {
        pageHeigth: {
            height: 1
        }
    },
    // methods: {
    //   getHeigth () {
    //       this.pageHeigth.height = window.innerHeight - 70 + 'px'
    //       console.log(pageHeigth.height)
    //   }
    // },   
    // created() {
    //   this.getHeigth()
    //   // console.log('1111')
    // //   window.addEventListener('resize', this.getHight);
    // },
    // // destroyed() {
    // //   window.removeEventListener('resize', this.getHight)
    // // },
    router
})


    

