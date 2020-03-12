<template>
  <div>
    <foot-tool-bar>
      <template v-slot:content>
        这是一段内容
      </template>
      <template v-slot:btn>
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </template>
    </foot-tool-bar>
  </div>

</template>

<script>
  export default {
    name: "FootToolBarView",
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {},
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

</style>
