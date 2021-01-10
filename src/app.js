import Vue from 'vue'
import Button from "./components/button";
import Icon from  './components/icon'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)

new Vue({
    el: '#app',
    data(){
        return{
            loading1: false,loading2: false,loading3: false,
        }
    }

})