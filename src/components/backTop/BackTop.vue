<template>
  <div class="wraper">
    <template>
      <el-backtop target=".wraper"></el-backtop>
    </template>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.wraper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
}
</style>
