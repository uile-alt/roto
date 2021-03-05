<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]: true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
            <slot></slot>
        </span>

    </div>
</template>
<script>
  export default {
    name: 'RotoPopover',
    props:{
      position:{
        type: String,
        default: 'top',
        validator(value){
          return ['top','bottom','left','right'].indexOf(value) >= 0
        }
      },
      trigger:{
        type: String,
        default: 'click',
        validator(value){
          return ['click','hover'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      if(this.trigger === 'click'){
        this.$refs.popover.addEventListener('p-click',this.onClick)
      }else {
        this.$refs.popover.addEventListener('mouseenter',this.open)
        this.$refs.popover.addEventListener('mouseleave',this.close)
      }
    },
    destroyed() {
      if(this.trigger === 'click'){
        this.$refs.popover.removeEventListener('p-click',this.onClick)
      }else {
        this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.close)
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper,triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {height: height2} = contentWrapper.getBoundingClientRect()
        const {left, width, top, height} = triggerWrapper.getBoundingClientRect()

        let positions = {
          top:{left: left + window.scrollX, top: top + window.scrollY},
          bottom:{left: left + window.scrollX , top: top + height + window.scrollY},
          left:{left: left + window.scrollX, top: top + (height - height2)/2 +window.scrollY},
          right:{left: left + width + window.scrollX, top: top + (height - height2)/2 +window.scrollY},
        }
        contentWrapper.style.left = positions[this.position].left +'px'
        contentWrapper.style.top = positions[this.position].top +'px'
      },

      close(){
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClickDocument (e)  {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){
          return
        }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))){
          return
        }
          this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          }else{
            this.open()
          }
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter:drop-shadow( 0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before,&::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top{
            margin-top: -10px;
            transform: translateY(-100%);

            &::before, &::after {
                left: 10px;
            }

            &::before{
                border-top-color: #000000;
                border-bottom: none;
                top:100%;

            }
            &::after{
                border-top-color: white;
                border-bottom: none;
                top:calc(100% - 1px);
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before{
                border-left-color: #000000;
                left:100%;
                border-right: none;
            }
            &::after{
                border-left-color: white;
                left:calc(100% - 1px);
                border-right: none;
            }
        }
        &.position-right{
            margin-left: 10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before{
                border-right-color: #000000;
                right:100%;
                border-left: none;
            }
            &::after{
                border-right-color: white;
                right:calc(100% - 1px);
                border-left: none;
            }
        }

        &.position-bottom{
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }
            &::before{
                border-bottom-color: #000000;
                bottom:100%;
                border-top: none;
            }
            &::after{
                border-bottom-color: white;
                bottom:calc(100% - 1px);
                border-top: none;
            }
        }

    }
</style>