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
import Tabs from './components/tabs'
import TabsPane from './components/tabs-pane'
import TabsItem from './components/tabs-item'
import TabsHead from './components/tabs-head'
import TabsBody from './components/tabs-body'
import Popover from './components/popover'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
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
Vue.component('r-tabs', Tabs)
Vue.component('r-tabs-pane', TabsPane)
Vue.component('r-tabs-item', TabsItem)
Vue.component('r-tabs-head', TabsHead)
Vue.component('r-tabs-body', TabsBody)
Vue.component('r-popover', Popover)
Vue.component('r-collapse', Collapse)
Vue.component('r-collapse-item', CollapseItem)
Vue.use(plugin)


new Vue({
  el: '#app',
  data() {
    return {
      selectedTab:'sports',
      loading1: false, loading2: false, loading3: false,
      messages: 0,
      selectedArr: ['2','1']
    }
  },

  methods: {
    hi(){
      console.log('yy');
    },
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast(position){
      this.$toast('为打包工具提供代码。',{
        position,
        enableHtml : false,
        closeButton: {
          text: '关闭',
          callback(){
            console.log('回调')
          }
        },
        autoClose: 3,
      })
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    }

  }
})

