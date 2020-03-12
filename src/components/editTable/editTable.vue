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
        @cell-click="cellClick"
    >
      <el-table-column type="selection" align="center" width="55"></el-table-column>
      <!--      <el-table-column label="规则编号" align="center">-->
      <!--        <template slot-scope="scope">No {{ scope.row.id }}</template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column label="描述" align="center">-->
      <!--        <template slot-scope="scope">-->
      <!--          <div v-if="scope.row[scope.column.label + 'flag']" class="flex a-center">-->
      <!--            <el-input-->
      <!--              size="mini"-->
      <!--              :ref="scope.column.label"-->
      <!--              v-model="scope.row.desc"-->
      <!--              @keydown.enter.native="onEnter(scope)"-->
      <!--            ></el-input>-->
      <!--            <div class="flex a-center">-->
      <!--              <el-button type="text" style="margin-left: 8px;" @click="cancel(scope)">取消</el-button>-->
      <!--              <el-button type="text" @click="confirm(scope)">确认</el-button>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div v-else>{{ scope.row.desc }}</div>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column label="服务调用次数" align="center" sortable>-->
      <!--        <template slot-scope="scope">-->
      <!--          <div v-if="scope.row[scope.column.label + 'flag']" class="flex a-center">-->
      <!--            <el-input-->
      <!--              size="mini"-->
      <!--              :ref="scope.column.label"-->
      <!--              @keydown.enter.native="onEnter(scope)"-->
      <!--              v-if="scope.row[scope.column.label + 'flag']"-->
      <!--              v-model="scope.row.serverNum"-->
      <!--            ></el-input>-->
      <!--            <div class="flex a-center">-->
      <!--              <el-button type="text" style="margin-left: 8px;" @click="cancel(scope)">取消</el-button>-->
      <!--              <el-button type="text" @click="confirm(scope)">确认</el-button>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div v-else>{{ scope.row.serverNum }}</div>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column label="状态" align="center">-->
      <!--        <template slot-scope="scope">-->
      <!--          <div v-if="scope.row[scope.column.label + 'flag']" class="flex a-center">-->
      <!--            <el-input-->
      <!--              size="mini"-->
      <!--              :ref="scope.column.label"-->
      <!--              @keydown.enter.native="onEnter(scope)"-->
      <!--              v-if="scope.row[scope.column.label + 'flag']"-->
      <!--              v-model="scope.row.status"-->
      <!--            ></el-input>-->
      <!--            <div class="flex a-center">-->
      <!--              <el-button type="text" style="margin-left: 8px;" @click="cancel(scope)">取消</el-button>-->
      <!--              <el-button type="text" @click="confirm(scope)">确认</el-button>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div v-else>{{ scope.row.status }}</div>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column label="更新时间" align="center" sortable>-->
      <!--        <template slot-scope="scope">-->
      <!--          <div v-if="scope.row[scope.column.label + 'flag']" class="flex a-center">-->
      <!--            <el-input-->
      <!--              size="mini"-->
      <!--              :ref="scope.column.label"-->
      <!--              @keydown.enter.native="onEnter(scope)"-->
      <!--              v-if="scope.row[scope.column.label + 'flag']"-->
      <!--              v-model="scope.row.date"-->
      <!--            ></el-input>-->
      <!--            <div class="flex a-center">-->
      <!--              <el-button type="text" style="margin-left: 8px;" @click="cancel(scope)">取消</el-button>-->
      <!--              <el-button type="text" @click="confirm(scope)">确认</el-button>-->
      <!--            </div>-->
      <!--          </div>-->

      <!--          <div v-else>{{ scope.row.date }}</div>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column
          :show-overflow-tooltip="true"
          v-for="(item, index) in tableDesc"
          :prop="item.prop"
          :label="item.label"
          :key="index"
          align="center">
        <template slot-scope="scope">
          <div v-if="scope.row[item.label + 'flag']" class="flex a-center">
            <el-input
                size="mini"
                :ref="item.label"
                v-model="scope.row[item.prop]"
                @keydown.enter.native="onEnter(scope)"
            ></el-input>
            <div class="flex a-center">
              <el-button type="text" style="margin-left: 8px;" @click="cancel(scope)">取消</el-button>
              <el-button type="text" @click="confirm(scope)">确认</el-button>
            </div>
          </div>
          <div v-else>{{ scope.row[item.prop] }}</div>
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
      cellClick(row, column) {
        let flag = column.label + 'flag'
        this.$set(row, flag, true)
        let key = column.label

        this.$nextTick(() => {
          console.log()
          this.$refs[key][0].focus()
        })
      },
      cancel(scope) {
        scope.row[scope.column.label + 'flag'] = false
        this.$message.info('您点击了取消按钮')
      },
      confirm(scope) {
        scope.row[scope.column.label + 'flag'] = false
        this.$message.success('您点击了确认按钮')
      },
      onEnter(scope) {
        scope.row[scope.column.label + 'flag'] = false
        this.$message.success('您按了回车确认')
      }
    },
    mounted() {

    },
    computed: {},
    watch: {
      tableData(val) {
        this.loading = !val.length
      }
    }
  }
</script>

<style lang="scss" scoped></style>
