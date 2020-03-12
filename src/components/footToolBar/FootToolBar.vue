<template>
  <div class="toolbar flex a-center">
    <slot name="content"/>
    <div class="flex a-center btn">
      <slot name="btn"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: "FootToolBar",
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .toolbar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 56px;
    padding: 0 24px;
    line-height: 56px;
    background: #fff;
    border-top: 1px solid #e8eaec;
    -webkit-box-shadow: 0 -1px 2px rgba(0,0,0,.03);
    box-shadow: 0 -1px 2px rgba(0,0,0,.03);
    .btn {
      position: absolute;
      right: 80px;
    }
  }
</style>
