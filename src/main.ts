import { createApp, App } from 'vue'
import { globalRegister } from './global'

import rootApp from './App.vue'
import router from './router'
import store from './store'
// import './service/axios_demo'
import lkRequest from './service'

const app: App = createApp(rootApp)

app.use(router)
app.use(store)

// app.use(ElementPlus) 全局注册
// 手动注册element-plus
globalRegister(app)

app.mount('#app')

lkRequest
  .request({
    url: '/get',
    method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log(res)
  })
