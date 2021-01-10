import Vue from 'vue'
import Button from "./components/button"
import Icon from  './components/icon'
import ButtonGroup from './components/button-group'


Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-button-group',ButtonGroup)


new Vue({
    el: '#app',
    data(){
        return{
            loading1: false,loading2: false,loading3: false,
        }
    }

})

import chai from 'chai'

const expect = chai.expect;
//单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq("#i-settings")
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq("#i-loading")
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    vm.$on('click', function () {
        console.log(1)
    })
    let button = vm.$el
    button.click()
}
