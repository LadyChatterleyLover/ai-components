<template>
  <div>
    <el-container>
      <el-aside width='200px'>
        <nav-left></nav-left>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navLeft from '../../components/navLeft/NavLeft'
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  components: {
    navLeft
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .el-aside {
    background: rgb(48,65,86);
  }
</style>
