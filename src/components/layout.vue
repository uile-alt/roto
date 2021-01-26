<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
      name: 'RotoLayout',
      data(){
        return{
          layoutClass:{
            hasSider:false
          }
        }
      },
      mounted(){
        this.$children.forEach((vm)=>{
          if(vm.$options.name === 'RotoSider'){
            this.layoutClass.hasSider = true
          }
        })
      }
    }

</script>
<style lang="scss" scoped>
    .layout{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>