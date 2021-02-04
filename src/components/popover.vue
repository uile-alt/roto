<template>
    <div class="popover" @click.stop="change">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>

    </div>
</template>
<script>
  export default {
    name: 'RotoPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      change() {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            let {left, width, top, height} = this.$refs.triggerWrapper.getBoundingClientRect()
            console.log(left,top,width,height)
            this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY +'px'
            document.body.appendChild(this.$refs.contentWrapper)
            let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        border: 1px solid red;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        border: 1px solid green;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>