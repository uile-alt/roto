<template>
    <button class="r-button" :class="{[`icon-${iconPosition}`] : true}"
            @click="$emit('click')">
        <r-icon class="icon" v-if='icon && !loading'  :name="icon"></r-icon>
        <r-icon class="loading icon" v-if="loading" name="loading"></r-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        components:{
            'r-icon': Icon
        },
        props: {
            icon:{},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition:{
                type: String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },

    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    .loading{
        animation: spin 1s infinite linear ;}
    .r-button {
        display: inline-flex;justify-content: center;align-items: center;
        font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
        border-radius: var(--border-radius);border: 1px solid var(--border-color);
        background: var(--button-bg);vertical-align: middle;

        > .icon {order: 1;margin-right: .1em;}
        > .content {order: 2;}
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        &.icon-right {
            > .icon {order: 2;margin-right: 0;margin-left: .1em;}
            > .content {order: 1;} }
    }

</style>