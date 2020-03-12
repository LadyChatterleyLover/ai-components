<template>
  <div class="container">
    <h1>具体用法请参考:</h1>
    <div class="doc" @click="doc">文档介绍</div>
    <h1>组件介绍</h1>
    <div class="item">
      <h3>趋势组件</h3>
      <div class="desc">趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。</div>
    </div>
    <div class="item">
      <h3>通用登录</h3>
      <div class="desc">只需要传form对象和验证规则,验证码登录不需要传验证规则 </div>
    </div>
    <div class="item">
      <h3>图片预览</h3>
      <div class="desc">点击图片预览,再点击或者空白区域取消预览 </div>
    </div>
    <div class="item">
      <h3>通知图标</h3>
      <div class="desc">通用通知图标,可点击自定义通知内容 </div>
    </div>
    <div class="item">
      <h3>标签选择</h3>
      <div class="desc">标签可全选和单选, 可展开和收起 </div>
    </div>
    <div class="item">
      <h3>进度条</h3>
      <div class="desc">普通进度条,是否显示内容,自定义内容,动画效果 </div>
    </div>
    <div class="item">
      <h3>锁屏</h3>
      <div class="desc">输入密码,既进入锁屏页面,密码不正确,只能访问当前锁屏页面,无权访问其他页面 </div>
    </div>
    <div class="item">
      <h3>全屏</h3>
      <div class="desc">点击全屏,既进入全屏,点击esc或再次点击按钮,退出全屏 </div>
    </div>
    <div class="item">
      <h3>底部工具栏</h3>
      <div class="desc">类似谷歌浏览器下载内容,可定制工具栏内容 </div>
    </div>
    <div class="item">
      <h3>可拖拽dialog</h3>
      <div class="desc">可拖动的dialog,有边界。</div>
    </div>
    <div class="item">
      <h3>行内可编辑表格</h3>
      <div class="desc">所有单元格变成输入框。</div>
    </div>
    <div class="item">
      <h3>单元格可编辑表格</h3>
      <div class="desc">单个单元格可编辑,自动获取焦点,回车可提交。</div>
    </div>
    <div class="item">
      <h3>回到顶部组件</h3>
      <div class="desc">该组件已经注入在路由中,将作用于每个页面。</div>
    </div>
    <div class="item">
      <h3>403组件</h3>
      <div class="desc">通用403组件</div>
    </div>
    <div class="item">
      <h3>404组件</h3>
      <div class="desc">通用404组件</div>
    </div>
    <div class="item">
      <h3>500组件</h3>
      <div class="desc">通用500组件</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    doc() {
      window.open('https://ladychatterleylover.github.io/ele-component-doc/')
    }
  },
  mounted() { },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.item {
  h3 {
    margin: 30px 0;
  }
}
  .doc {
    color: skyblue;
    font-size: 20px;
    margin: 20px 0;
    cursor: pointer;
  }
</style>
