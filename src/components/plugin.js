import Toast from './toast'

export default {
  install(Vue){
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:{
          closeButton:{
            text:'知道',
            callback(){
              console.log('111')
            }
          }
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}