<template>
  <div>
    <div class="container">
      <h2>标签选择器</h2>
      <tag :tagList="tagList1"></tag>
    </div>
    <div style="width: 500px" class="container">
      <h2>标签选择器(可展开收起)</h2>
      <select-tag :tagList="tagList2"></select-tag>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TagView",
    components: {},
    props: {},
    data() {
      return {
        tagList1: [
          {
            name: '标签1'
          },
          {
            name: '标签2'
          },
          {
            name: '标签3'
          },
          {
            name: '标签4'
          },
          {
            name: '标签5'
          },
          {
            name: '标签6'
          },
        ],
        tagList2: [
          {
            name: '标签1'
          },
          {
            name: '标签2'
          },
          {
            name: '标签3'
          },
          {
            name: '标签4'
          },
          {
            name: '标签5'
          },
          {
            name: '标签6'
          },
          {
            name: '标签7'
          },
          {
            name: '标签8'
          },
          {
            name: '标签9'
          },
          {
            name: '标签10'
          },
          {
            name: '标签11'
          },
          {
            name: '标签12'
          },
          {
            name: '标签13'
          },
          {
            name: '标签14'
          },
          {
            name: '标签15'
          },
          {
            name: '标签16'
          },
          {
            name: '标签17'
          },
          {
            name: '标签18'
          },
        ]
      }
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
 .container {
   padding: 20px;
   h2 {
     margin-bottom: 10px;
   }
 }

</style>
