<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'RotoTabs',
    data(){
      return{
        eventBus: new Vue()
      }
    },
    props: {
      selected:{
        type: String,
        required: true
      },
      direction:{
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    created() {
    },
    mounted() {
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'RotoTabsHead'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name === 'RotoTabsItem' && childVm.name === this.selected){
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>
<style scoped lang="scss">
    .tabs {
    }
</style>