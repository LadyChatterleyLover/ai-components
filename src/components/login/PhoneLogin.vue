<template>
  <div class="container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入用户名">
          <i slot="prefix" class="el-input__icon el-icon-phone"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-input placeholder="请输入验证码" v-model="ruleForm.code">
              <i slot="prefix" class="el-input__icon el-icon-tickets"></i>
            </el-input>
          </el-col>
          <el-col :span="6" >
            <el-button @click="send">获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: "PhoneLogin",
    components: {},
    props: {
      ruleForm: {
        type: Object,
        required: true
      },
    },
    data() {
      let checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      }
      return {
        rules: {
          phone: [
            {validator: checkPhone, trigger: 'change'},
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      submit(e) {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.$emit('submit', e)
          } else {
            this.$emit('errHandle', e)
          }
        })
      },
      send(e) {
        this.$emit('send', e)
      }
    },
    mounted() {

    },
    created() {

    }
    ,
    filters: {}
    ,
    computed: {}
    ,
    watch: {}
    ,
    directives: {}
  }
</script>

<style scoped lang="scss">

</style>
