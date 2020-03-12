<template>
  <div class="content">
    <div class="icon" v-if="$slots.content">
      <el-popover
          :placement="placement"
          :width="width"
          trigger="click">
          <span slot="reference">
            <i class="el-icon-bell" ></i>
          <div class="number flex a-center j-center" v-if="$slots.default[0].text * 1 < 100">
            <slot></slot>
          </div>
          <div class="number flex a-center j-center" v-if="$slots.default[0].text * 1 >= 100">
            <el-tooltip class="item" effect="dark" :content="`您有${($slots.default[0].text).trim()}条新通知`" placement="top">
              <div class="more">...</div>
            </el-tooltip>
          </div>
          </span>
        <slot name="content"></slot>
      </el-popover>
    </div>
    <div class="icon" v-else>
      <i class="el-icon-bell"></i>
      <div class="number flex a-center j-center"
           v-if="$slots.default && $slots.default[0].text * 1 < 100">
        <slot></slot>
      </div>
      <div class="number flex a-center j-center"
           v-if="$slots.default && $slots.default[0].text * 1 >= 100">
        <el-tooltip class="item" effect="dark" :content="`您有${($slots.default[0].text).trim()}条新通知`" placement="top">
          <div class="more">...</div>
        </el-tooltip>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "notice-icon",
    components: {},
    props: {
      placement: {
        type: String,
        default: 'top'
      },
      width: {
        type: [Number, String],
        default: 100
      }
    },
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
  .content {
    cursor: pointer;

    .icon {
      position: relative;
      font-size: 22px;

      .number {
        position: absolute;
        top: -6px;
        left: 12px;
        font-size: 12px;
        background: #ed4014;
        color: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;

        .more {
          position: relative;
          top: -3px;
          left: 0px;
        }
      }
    }
  }

</style>
