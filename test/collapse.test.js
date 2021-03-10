import Popover from "../src/components/popover";

const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/components/collapse'
import CollapseItem from '../src/components/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {

  it('存在.', () => {
    expect(Collapse).to.exist
  })
  it('接受selected属性',(done)=>{
    Vue.component('r-collapse',Collapse)
    Vue.component('r-collapse-item',CollapseItem)

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <r-collapse :selected.sync="arr">
          <r-collapse-item title="标题1" name="1"><span id="content-1">1</span></r-collapse-item>
          <r-collapse-item title="标题2" name="2"><span id="content-2">2</span></r-collapse-item>
          <r-collapse-item title="标题3" name="3"><span id="content-3">3</span></r-collapse-item>
        </r-collapse>
    `
    const vm = new Vue({
      el: div,
      data(){
        return{
          arr:['1','2']
        }
      }
    })
    setTimeout(()=>{
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接受 single 属性', (done) => {
    Vue.component('r-collapse', Collapse)
    Vue.component('r-collapse-item', CollapseItem)

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <r-collapse :selected.sync="arr" single>
          <r-collapse-item title="标题1" name="1"><span id="content-1">1</span></r-collapse-item>
          <r-collapse-item title="标题2" name="2"><span id="content-2">2</span></r-collapse-item>
          <r-collapse-item title="标题3" name="3"><span id="content-3">3</span></r-collapse-item>
        </r-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        arr: ['1']
      }
    })
    setTimeout(()=>{
      vm.$el.querySelector('[data-name="2"]').click()
        setTimeout(()=>{
          expect(vm.$el.querySelector('#content-1')).to.not.exist
          expect(vm.$el.querySelector('#content-2')).to.exist
          expect(vm.$el.querySelector('#content-3')).to.not.exist
          done()
          vm.$el.remove()
          vm.$destroy()
      })

    })
  })
  it('触发 update:selected 事件', (done) => {
    Vue.component('r-collapse', Collapse)
    Vue.component('r-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)

    div.innerHTML = `
        <r-collapse :selected="arr" @update:selected="onSelect">
          <r-collapse-item title="标题1" name="1"><span id="content-1">1</span></r-collapse-item>
          <r-collapse-item title="标题2" name="2"><span id="content-2">2</span></r-collapse-item>
          <r-collapse-item title="标题3" name="3"><span id="content-3">3</span></r-collapse-item>
        </r-collapse>
    `
    const callback = sinon.fake();
    const vm = new Vue({
      el: div,
      data: {
        arr: ['1']
      },
      methods: {
        onSelect: callback
      }
    })
    setTimeout(()=>{
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(()=>{
        expect(callback).to.have.been.called
        done()
      })
    })
  })
})