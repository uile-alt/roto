import Vue from 'vue'
import Button from "./components/button"
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-button-group', ButtonGroup)
Vue.component('r-input', Input)
Vue.component('r-col', Col)
Vue.component('r-row', Row)


new Vue({
  el: '#app',
  data() {
    return {
      loading1: false, loading2: false, loading3: false,
      message: 0
    }
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
})

