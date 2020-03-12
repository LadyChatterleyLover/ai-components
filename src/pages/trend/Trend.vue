<template>
  <div class="container">
    <el-divider>正常</el-divider>
    <div class="content flex">
      <div class="item">
        <trend>
          <div slot="text">营业额</div>
          5%
        </trend>
      </div>
      <div class="item">
        <trend type="down">
          <div slot="text">个人业绩</div>
          3%
        </trend>
      </div>
    </div>
    <el-divider>颜色反转</el-divider>
    <div class="content flex">
      <div class="item">
        <trend reverseColor>
          <div slot="text">销售量</div>
          5%
        </trend>
      </div>
      <div class="item">
        <trend type="down" reverseColor>
          <div slot="text">成本</div>
          3%
        </trend>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {},
    data() {
      return {

      }
    },
    components: {

    },
    methods: {},
    mounted() {
    },
    computed: {},
    watch: {}
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;

    .content {
      border: 1px solid #ccc;
      padding: 20px;
      margin-bottom: 100px;
    }

    .item {
      margin-right: 20px;
    }

    .desc {
      margin-top: 20px;

      h1 {
        margin-bottom: 20px;
      }

      .code {
        background: #ccc;
      }
    }
  }
</style>
