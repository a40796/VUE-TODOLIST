
//入口文件
import Vue from 'vue'  //引入vue
import App from './App.vue' //父組件
import plugins from './plugins'


Vue.config.productionTip = false //關閉vue生產提示
Vue.use(plugins)

//創建vue 實例
new Vue({
  render: h => h(App),
}).$mount('#app')
