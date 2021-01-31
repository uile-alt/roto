const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast'



Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('props',()=>{
    it('接受autoClose',(done)=>{
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close',()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
    it('接受closeButton',()=>{
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text:'close',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('close')

      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })
    it('接受 enableHtml', ()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {enableHtml: true}
      })
      vm.$slots.default = ['<strong class="hi">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('.hi')
      expect(strong).to.exist
    })
    it('接受 position', ()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {position: 'bottom'}
      })
      vm.$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })

})
