<template>
  <div class="dialog drag-dialog__header">
    <el-button type="primary" @click="dialogVisible = true"
      >打开dialog</el-button
    >
    <el-dialog
      v-el-drag-dialog
      style="left: 10px"
      ref="dialog"
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      dialogVisible: false
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      // this.drag()
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
