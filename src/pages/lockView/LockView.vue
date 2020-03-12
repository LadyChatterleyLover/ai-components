<template>
  <div class="container flex a-center j-center">
    <div :class="{'bounceOut': correct}" class="animated">
      <div class="content">
        <h2>admin</h2>
        <div class="flex a-center desc animated" :class="{'shake': flag}">
          <el-input type="password" placeholder="请输入锁屏密码" v-model="value"></el-input>
          <el-button icon="el-icon-lock" class="btn" @click="handleClick"></el-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "LockView",
    components: {},
    props: {},
    data() {
      return {
        value: '',
        flag: false,
        correct: false, // 输入正确
      }
    },
    methods: {
      handleClick() {
        let pwd = sessionStorage.getItem('lockPwd')
        if (this.value !== pwd) {
          this.$message.error('密码不正确,请重新输入')
          this.flag = true
          setTimeout(() => {
            this.flag = false
          }, 500)
        } else {
          this.flag = false
          this.correct = true
          sessionStorage.removeItem('lockPwd')
          sessionStorage.removeItem('isLock')
          setTimeout(() => {
            this.$message.success('欢迎回来')
            this.$router.go(-1)
          }, 800)
        }
      }
    },
    mounted() {

    },
    created() {

    },
    beforeRouteLeave (to, from, next) {
      if (this.correct) next()
    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
    .content {
      animation: down .8s linear;
      h2 {
        margin-bottom: 5px;
      }
      .desc {
        height: 40px;
        .btn {
          border-left: none;
          height: 42px;
        }
      }
    }
  }
  @keyframes down {
    0% {
      transform: translateY(-1000px);
    }
    50% {
      transform: translateY(-50px);
    }
    60% {
      transform: translateY(50px);
    }
    70% {
      transform: translateY(-20px);
    }
    80% {
      transform: translateY(-20px);
    }
    90% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
</style>
