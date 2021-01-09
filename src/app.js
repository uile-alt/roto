import Vue from 'vue'
import Button from "./components/button";
import Icon from  './components/icon'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)

new Vue({
    el: '#app',
    data: {
        message: 'hi'
    }
})