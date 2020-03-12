<template>
  <div class="login">
    <div class="container">
      <h2>
        普通登录组件
      </h2>
      <login :ruleForm="ruleForm" @submit="onSubmit" @errHandle="errHandle"></login>
    </div>
    <div class="container">
      <h2>
        手机验证码
      </h2>
      <phone-login :ruleForm="phoneForm" @submit="onSubmit" @errHandle="errHandle" @send="send"></phone-login>
    </div>
  </div>

</template>

<script>
  export default {
    name: "LoginView",
    components: {},
    props: {},
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        phoneForm: {
          username: '',
          phone: ''
        },
      }
    },
    methods: {
      onSubmit() {
        this.$message.success('提交成功')
      },
      errHandle() {
        this.$message.error('提交失败')
      },
      send() {
        console.log(111)
        this.$message.info('获取验证码')
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
  .login {
    margin-top: 100px;
    .container {
      width: 500px;
      padding: 20px;
    }
  }
</style>
