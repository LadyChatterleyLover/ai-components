<template>
  <div class="container">
    <h2>图片预览</h2>
    <div style="width: 100px;height: 100px;">
      <image-preview :image="image"></image-preview>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ImageView",
    components: {},
    props: {},
    data() {
      return {
        image: require('../../assets/1.jpg')
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
