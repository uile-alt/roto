const expect = chai.expect;
import Vue from 'vue'
import TabsItem from "../src/components/tabs-item";
Vue.component('r-tabs-item', TabsItem)

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsItem', () => {

  it('存在', () => {
    expect(TabsItem).to.exist
  })
  it('接受disabled',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true,
        name:'1234'
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
    })
  it('接受 name',()=> {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('test')
    vm.$el.remove()
    vm.$destroy()
  })
})
