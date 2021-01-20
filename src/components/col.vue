<template>
    <div class="col" :class="[`col_${span}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'RotoCol',
    props:{
      span: {
        type:[Number,String]
      }
    }
}
</script>
<style lang="scss" scoped>
    .col{
        height: 100px;
        background: beige;
        width: 50%;
        border: 1px solid red;

        $class: col_;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>