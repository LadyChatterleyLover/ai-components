<template>
  <div class="container">

    <div class="flex a-center">
      <div v-for="(item, index) in tagList" :key="index" class="item" @click="handleClick(item, index)"
           :class="{active: item.selected}">
        {{item.name}}
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Tag",
    components: {},
    props: {
      tagList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: -1
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
  .item {
    margin-right: 10px;
    padding: 2px 5px;
    cursor: pointer;
  }
  .content {
    position: relative;
    .btn {
      position: absolute;
      right: 1px;
    }
  }
  .active {
    background: #2d8cf0;
    color: #fff;
  }
</style>
