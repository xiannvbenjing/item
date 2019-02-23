import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

// Vue.config.productionTip = false

// 引入mui的css文件
import './lib/mui/css/mui.css'
// 引入mui扩展字体的css文件
import './lib/mui/css/icons-extra.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
