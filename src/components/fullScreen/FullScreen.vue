<template>
  <el-tooltip class="item" effect="dark" :content="fullscreen ? `取消全屏`:`全屏`" placement="bottom">
    <i class="el-icon-s-grid icon" @click="handleClick"></i>
  </el-tooltip>

</template>

<script>
  import screenfull from 'screenfull'

  export default {
    name: "FullScreen",
    components: {},
    props: {},
    data() {
      return {
        fullscreen: false
      }
    },
    methods: {
      handleClick() {
        screenfull.toggle()
        this.fullscreen = true
      }
    },
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
  .icon {
    font-size: 22px;
  }
</style>
