<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach((key) => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'RotoCol',

    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      phone: {type: Object, validator,},
      ipad: {type: Object, validator,},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widthPc: {type: Object, validator,},
    },
    data() {
      return {
        gutter: 0,
      }
    },
    computed: {
      colStyle() {
        return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'}
      },
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widthPc} = this
        let phoneClass = []
        if (phone) {
          phoneClass = []
        }
        return [span && `col-${span}`, offset && `offset-${offset}`,
          ...(phone && [`col-phone-${phone.span}`]),
          ...(ipad && [`col-ipad-${ipad.span}`]),
          ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
          ...(pc && [`col-pc-${pc.span}`]),
          ...(widthPc && [`col-width-pc-${widthPc.span}`])
        ]

      }
    }
  }
</script>
<style lang="scss" scoped>
    .col {
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (max-width: 576px) {
            $class: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 576px) and (max-width: 768px) {
            $class: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) and (max-width: 992px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 992px) and (max-width: 1200px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class: col-width-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class: offset-width-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }

</style>