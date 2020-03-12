<template>
  <div>
    <el-menu
      class="menus"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409eff"
      router
    >
      <el-menu-item
        v-for="(item, index) in list"
        :index="item.url"
        :key="index"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      list: [
        {
          name: '首页',
          url: '/home',
          icon: 'el-icon-s-home'
        },
        {
          name: '趋势',
          url: '/trend',
          icon: 'el-icon-s-data'
        },
        {
          name: '通用登录',
          url: '/login',
          icon: 'el-icon-user'
        },
        {
          name: '图片预览',
          url: '/imagePreview',
          icon: 'el-icon-picture'
        },
        {
          name: '通知图标',
          url: '/noticeIcon',
          icon: 'el-icon-bell'
        },
        {
          name: '标签选择器',
          url: '/tag',
          icon: 'el-icon-price-tag'
        },
        {
          name: '进度条',
          url: '/progress',
          icon: 'el-icon-open'
        },
        {
          name: '锁屏',
          url: '/lock',
          icon: 'el-icon-lock'
        },
        {
          name: '全屏',
          url: '/fullScreen',
          icon: 'el-icon-menu'
        },
        {
          name: '底部工具栏',
          url: '/footToolBar',
          icon: 'el-icon-position'
        },
        {
          name: '拖拽dialog',
          url: '/dialog',
          icon: 'el-icon-s-grid'
        },
        {
          name: '行内可编辑表格',
          url: '/inlineTable',
          icon: 'el-icon-tickets'
        },
        {
          name: '单元格可编辑表格',
          url: '/editTable',
          icon: 'el-icon-edit-outline'
        },
        {
          name: '回到顶部',
          url: '/backTop',
          icon: 'el-icon-caret-top'
        },
        {
          name: '403',
          url: '/403',
          icon: 'el-icon-question'
        },
        {
          name: '404',
          url: '/404',
          icon: 'el-icon-close'
        },
        {
          name: '500',
          url: '/500',
          icon: 'el-icon-position'
        },
      ]
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .menus {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;
  }
</style>
