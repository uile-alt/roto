import Vue from 'vue'
import Button from "./components/button"
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Content from './components/content'
import Footer from './components/footer'
import Sider from './components/sider'
import Layout from './components/layout'
import Header from './components/header'
import Toast from './components/toast'
import plugin from "./plugin";

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-button-group', ButtonGroup)
Vue.component('r-input', Input)
Vue.component('r-col', Col)
Vue.component('r-row', Row)
Vue.component('r-content', Content)
Vue.component('r-footer', Footer)
Vue.component('r-sider', Sider)
Vue.component('r-layout', Layout)
Vue.component('r-header', Header)
Vue.component('r-toast', Toast)
Vue.use(plugin)

import createElement from 'vue'
const h = createElement

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false, loading2: false, loading3: false,
      messages: 0
    }
  },
  created(){

  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast(){
      this.$toast('为打包工具提供代码。',{
        enableHtml : false,
        closeButton: {
          text: '哈哈',
          callback(){
            console.log('我触发了')
          }
        },
        autoClose: false,
        autoCloseDelay: 3,
        position: 'middle'

      })
    }
  }
})

