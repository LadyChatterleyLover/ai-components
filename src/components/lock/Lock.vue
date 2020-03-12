<template>
  <div class="container">
    <el-tooltip  effect="dark" content="锁屏" placement="bottom">
      <i class="el-icon-lock icon" @click="handleClick"></i>
    </el-tooltip>
    <el-dialog
        title="设置锁屏密码"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="close"
       >
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="110px">
       <el-form-item label="锁屏密码" prop="value">
         <el-input clearable type="password" v-model="ruleForm.value" placeholder="请输入锁屏密码"></el-input>
       </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="sure">确 定</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: "Lock",
    components: {},
    props: {},
    data() {
      return {
        dialogVisible: false,
        ruleForm: {
          value: ''
        },
        rules: {
          value: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 6, max: 15, message: '密码在6-15位之间', trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      handleClick() {
        this.dialogVisible = true
      },
      close() {
        this.dialogVisible = false
        this.$refs.ruleForm.resetFields();
      },
      sure() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            sessionStorage.setItem('lockPwd', this.ruleForm.value)
            sessionStorage.setItem('isLock', 0)
            this.$router.push('/lockView')
            this.dialogVisible = false

          } else {
            this.$message.error('表单填写有误,请检查后重新填写')
          }
        })


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
  .container {
    padding: 20px;
    .icon {
      font-size: 22px;
    }
  }
</style>
