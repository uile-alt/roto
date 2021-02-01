const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/components/tabs'
import TabsPane from "../src/components/tabs-pane";
import TabsItem from "../src/components/tabs-item";
import TabsHead from "../src/components/tabs-head";
import TabsBody from "../src/components/tabs-body";
Vue.component('r-tabs', Tabs)
Vue.component('r-tabs-pane', TabsPane)
Vue.component('r-tabs-item', TabsItem)
Vue.component('r-tabs-head', TabsHead)
Vue.component('r-tabs-body', TabsBody)


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
        name: 'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    vm.$el.remove()
    vm.$destroy()
  })
})
