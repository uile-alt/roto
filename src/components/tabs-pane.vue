<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'RotoTabsPane',
    inject: ['eventBus'],
    data(){
      return{
        active: false
      }
    },
    props:{
      name:{
        type: [String,Number],
        required: true
      }
    },
    computed: {
      classes() {
        return{
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name;
      })
    },
  }
</script>
<style scoped lang="scss">
    .tabs-pane{
        &.active{
            background: #00d6b2;
        }
    }
</style>