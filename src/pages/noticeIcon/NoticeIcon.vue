<template>
  <div class="container">
    <h2>通知图标</h2>
    <div class="flex a-center">
      <div class="flex a-center">
        <h4>消息为空</h4>
        <notice-icon></notice-icon>
      </div>
      <div class="flex a-center" style="margin-left: 30px">
        <h4>消息小于100</h4>
        <notice-icon>
          5
        </notice-icon>
      </div>
      <div class="flex a-center" style="margin-left: 30px">
        <h4>消息小于100</h4>
        <notice-icon>
          99
        </notice-icon>
      </div>
      <div class="flex a-center" style="margin-left: 30px">
        <h4>消息大于100</h4>
        <notice-icon>
          1500
        </notice-icon>
      </div>
    </div>
    <h2 style="margin-top: 30px">通知菜单(用法同element-ui Popover组件)</h2>
    <div class="flex a-center">
      <div style="margin-right: 30px" class="flex a-center">
        <h4>默认宽度为100,正上方弹出菜单</h4>
        <notice-icon>
          5
          <template v-slot:content>
            这是一个自定义的菜单
          </template>
        </notice-icon>
      </div>
      <div class="flex a-center">
        <h4>可以控制菜单的宽度和定位</h4>
        <notice-icon :width="300" placement="bottom">
          5
          <template v-slot:content>
            可以控制菜单的宽度和定位
          </template>
        </notice-icon>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "",
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
  .container {
    padding: 20px;

    h2 {
      margin-bottom: 10px;
    }
  }
</style>
