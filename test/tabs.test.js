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

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected',(done)=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <r-tabs selected="hot">
        <r-tabs-head>
            <r-tabs-item name="hot">热点</r-tabs-item>
            <r-tabs-item name="finance" >财经</r-tabs-item>
            <r-tabs-item name="sports">体育</r-tabs-item>
        </r-tabs-head>
        <r-tabs-body>
            <r-tabs-pane name="hot">热点相关</r-tabs-pane>
            <r-tabs-pane name="finance">财经相关</r-tabs-pane>
            <r-tabs-pane name="sports">体育相关</r-tabs-pane>
        </r-tabs-body>
    </r-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let x = vm.$el.querySelector('.tabs-item[data-name="hot"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })


})
