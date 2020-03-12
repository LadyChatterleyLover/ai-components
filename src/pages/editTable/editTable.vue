<template>
  <div class="container">
    <edit-table :tableData='tableData' :table-desc="tableDesc"></edit-table>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      tableData: [],
      tableDesc: [
        {
          label: '规则编号',
          prop: 'id'
        },
        {
          label: '描述',
          prop: 'desc'
        },
        {
          label: '服务调用次数',
          prop: 'serverNum'
        },
        {
          label: '状态',
          prop: 'status'
        },
        {
          label: '更新时间',
          prop: 'date'
        },
      ]
    }
  },
  components: {},
  methods: {
    getData() {
      this.$api.getTableData().then(res => {
        if (res.code === 200) {
          this.tableData = res.data
        }
      })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>
