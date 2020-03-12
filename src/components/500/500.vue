<template>
  <div class="noauth flex a-center j-center">
    <div class="img"></div>
    <div class="content">
      <h1>500</h1>
      <div class="text">抱歉,服务器出错了</div>
      <el-button type="primary" size="small" @click="$router.push('/')"
        >返回首页</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.noauth {
  height: 100vh;
  .img {
    width: 430px;
    height: 360px;
    background:url("https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    animation: imgmove .8s linear;
    margin-right: 80px;
  }
  .content {
    animation: textmove .8s linear;
    h1 {
      margin-bottom: 10px;
      font-size: 40px;
    }
    .text {
      color:rgba(0,0,0,.45);
      margin-bottom: 20px;
    }
  }
}
@keyframes textmove {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes imgmove {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
