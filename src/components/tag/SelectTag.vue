<template>
  <div class="selectTag">

    <div class="flex a-center content" :class="{isOpen: isOpen}">
      <div v-for="(item, index) in tagList" :key="index" class="item" @click="handleClick(item, index)"
           :class="{active: item.selected}">
        {{item.name}}
      </div>
      <div class="btn" @click="isOpen = !isOpen">
        <div v-if="isOpen">
          <el-button type="text">收起</el-button>
          <i class="el-icon-arrow-up icon"></i>
        </div>
        <div v-else>
          <el-button type="text">展开</el-button>
          <i class="el-icon-arrow-down icon"></i>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "SelectTag",
    components: {},
    props: {
      tagList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: -1,
        text: '展开',
        isOpen: false
      }
    },
    methods: {
      handleClick(item, index) {
        if (index === 0) {
          item.selected = !item.selected
          this.tagList.map(tag => {
            tag.selected = item.selected
          })
        } else {
          item.selected = !item.selected
          let flag = this.tagList.slice(1).every(tag => tag.selected)
          this.tagList[0].selected = flag
        }
      }
    },
    mounted() {
      this.tagList.unshift({name: '全部'})
      this.tagList.map(item => {
        this.$set(item, 'selected', false)
      })
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
  .selectTag {
    .content {
      position: relative;
      flex-wrap: wrap;
      max-height: 32px;
      overflow: hidden;
      padding-right: 20px;
      .item {
        margin-right: 10px;
        padding: 2px 5px;
        cursor: pointer;
        margin-bottom: 6px;
      }

      .btn {
        position: absolute;
        right: 0px;
        top: -6px;
        .icon {
          color: #409EFF;
        }
      }
    }
  }
  .isOpen {
    max-height: 200px !important;
  }
  .active {
    background: #2d8cf0;
    color: #fff;
  }
</style>
