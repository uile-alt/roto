<template>
    <svg class="r-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
  import '../svg'

  export default {
    name: 'RotoIcon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
    .r-icon {
        width: 1em;
        height: 1em;
    }
</style>