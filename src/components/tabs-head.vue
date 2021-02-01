<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line" v-show="x"></div>
        <div class="actions-wrapper">
            <slot name="actions" ></slot>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'RotoTabsHead',
    inject: ['eventBus'],
    data(){
      return{
        x:false
      }
    },
    mounted() {
      this.eventBus.$on('update:selected',(item,vm)=>{
        this.x = true
        let {width,left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left}px)`
      })
    }
  }
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid $blue;
            transition: all .3s;
        }
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>