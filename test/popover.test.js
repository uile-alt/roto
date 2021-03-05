const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/components/popover'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置position', (done) => {
    Vue.component('r-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <r-popover position="left" ref="a">
      <template slot="content">
      popover弹出内容
      </template>
      <button>按钮</button>
    </r-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-left')).to.be.true
      done()
    })
  })
  it('可以设置trigger', (done) => {
    Vue.component('r-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <r-popover position="left" trigger="hover" ref="a">
      <template slot="content">
      popover弹出内容
      </template>
      <button>按钮</button>
    </r-popover>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      let event = new Event('mouseenter')
      vm.$refs.a.$el.dispatchEvent(event)
      vm.$nextTick(()=>{
        const contentWrapper = vm.$refs.a.$refs
        expect(contentWrapper).to.exist
        done()
      })
    })

  })

})