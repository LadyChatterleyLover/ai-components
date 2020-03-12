<template>
  <div>
    <div class="flex a-center j-between content" v-if="lineData">
      <div v-if="isAnimate">
        <count-to :startVal="startVal" :endVal="percentage" :duration="duration"></count-to>
      </div>
      <div class="c-per" v-else>{{percentage}}%</div>
      <div>
        <slot name="content"></slot>
      </div>
    </div>
    <div class="flex a-center" style="width: 100%">
      <div class="progress-container" ref="progressContainer">
        <div class="progress-content flex j-end"
             ref="progressContent"
             :style="{height: strokeWidth + 'px', background: bgColor}"
             v-if="isAnimate">
          <div class="textInside flex a-center j-center" v-if="textInside && !noData">{{percentage}}%</div>
        </div>
        <div v-if="!isAnimate" class="progress-content flex j-end"
             :style="{width: percentage + '%', height: strokeWidth + 'px', background: bgColor}">
          <div class="textInside flex a-center j-center" v-if="textInside && !noData">{{percentage}}%</div>
        </div>
      </div>
      <div>
        <div class="percentage" v-if="!textInside && !lineData && !noData && isAnimate">
          <count-to :startVal="startVal" :endVal="percentage" suffix="%" :duration="duration"></count-to>
        </div>
        <div class="percentage" v-if="!textInside && !lineData && !noData && !isAnimate">{{percentage}}%</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AiProgress",
    components: {},
    props: {
      // 进度条的值
      percentage: {
        type: [Number, String],
        required: true
      },
      // 是否内联显示数据
      textInside: {
        type: Boolean,
        default: false
      },
      // 进度条高度
      strokeWidth: {
        type: [Number, String],
        default: 6
      },
      // 默认动画时长
      duration: {
        type: [Number, String],
        default: 2000
      },
      // 是否有动画
      isAnimate: {
        type: Boolean,
        default: false
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: '#409eff'
      },
      // 是否不显示数据
      noData: {
        type: Boolean,
        default: false
      },
      // 是否自定义显示内容
      lineData: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        startVal: 0,
        width: 0,
        timer: null
      }
    },
    methods: {
      start() {
        if (this.isAnimate && this.$refs.progressContainer && this.$refs.progressContent) {
          this.$nextTick(() => {
            let style = window.getComputedStyle(this.$refs.progressContainer, null)
            let width = (style.width.replace('px', '')) * (this.percentage * 1 / 100)
            this.$refs.progressContent.style.width = width.toFixed(2) + 'px'
            this.$refs.progressContent.style.transition = ` width ${this.duration / 1000}s ease`
          })
        }
      },
    },
    mounted() {
      this.start()
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
  .content {
    margin-bottom: 10px;
    color: #666;

    .c-per {
      font-size: 26px;
    }
  }

  .progress-container {
    width: 100%;
    background: #ebeef5;
    border-radius: 100px;

    .progress-content {
      border-radius: 100px;
      width: 0;
    }

    .textInside {
      color: #fff;
      margin-right: 5px;
    }
  }

  .percentage {
    margin-left: 6px;
    font-size: 12px;
    width: 30px;
  }
</style>
