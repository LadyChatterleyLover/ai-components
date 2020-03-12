<template>
  <div>
    <el-table
        v-loading="loading"
        :data="
        tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        )
      "
    >
      <el-table-column
          :show-overflow-tooltip="true"
          v-for="(item, index) in tableDesc"
          :prop="item.prop"
          :label="item.label"
          :key="index"
          align="center">
        <template slot-scope="scope">
          <el-input size="mini" v-if="scope.row.editFlag" v-model="scope.row[item.prop]"></el-input>
          <div v-else>{{ scope.row.date }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.editFlag">
            <el-button type="primary" size="mini" @click="scope.row.editFlag = false">保存</el-button>
            <el-button type="primary" size="mini" @click="scope.row.editFlag = false">取消</el-button>
          </div>
          <div v-else>
            <el-button type="primary" style="margin-right: 6px;" size="mini" @click="edit(scope)">编辑</el-button>
            <pop-confirm
                placement="top"
                width="220"
                okType="primary"
                :title="`您确定删除No${scope.row.id}吗?`"
                icon="el-icon-error"
                @confirm="handleConfirm"
                @cancel="handleCancel"
            >
              <el-button type="danger" size="mini">删除</el-button>
            </pop-confirm>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <pagination
        v-if="!loading"
        :tableData="tableData"
        @getPageSize="getPageSize"
        @getCurrentPage="getCurrentPage"
        style="margin-top:16px;"
    ></pagination>
  </div>
</template>

<script>
  import pagination from '../../components/pagination/Pagination'
  import popConfirm from '../../components/popConfirm/PopConfirm'

  export default {
    name: 'inlineTable',
    props: {
      tableData: {
        type: Array,
        required: true
      },
      tableDesc: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 10,
        editFlag: false,
        loading: true,
        visible: false
      }
    },
    components: {
      pagination,
      popConfirm
    },
    methods: {
      getPageSize(data) {
        this.pageSize = data
      },
      getCurrentPage(data) {
        this.currentPage = data
      },
      edit(scope) {
        scope.row.editFlag = true
      },
      del() {
        this.$nextTick(() => {
          this.visible = true
        })
      },
      handleConfirm() {
        this.$message.success('您点击了确认按钮')
      },
      handleCancel() {
        this.$message.info('您点击了取消按钮')
      }
    },
    mounted() {

    },
    computed: {},
    watch: {
      tableData(val) {
        this.loading = !val.length
        val.map(item => {
          this.$set(item, 'editFlag', false)
        })
      }
    }
  }
</script>

<style lang="scss" scoped></style>
