<template>
  <div class="trend flex a-center">
    <div class="text"><slot name='text'></slot></div>   
    <div class="flex a-center desc">
      <i v-if="flag === 'up'" :class="{down: reverseColor, up: !reverseColor}" class="icon el-icon-caret-top"></i>
      <i v-if="flag === 'down'" :class="{up: reverseColor, down: !reverseColor}" class="icon el-icon-caret-bottom"></i>
      <div class="text"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    type: {
      type: String,
      default: 'up'
    },
    reverseColor: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      flag: false
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.flag = this.type
    if (this.reverseColor) {
      this.flag = this.type === 'up' ? 'down' : 'up'
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.trend {
  .text {
    font-size: 14px;
  }
  .icon {
    margin-right: 2px;
  }
  .up {
    color: #f5222d;
  }
  .down {
    color: #52c41a;
  }
  .desc {
    margin-left: 6px;
  }
}
</style>
