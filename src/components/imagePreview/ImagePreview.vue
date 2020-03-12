<template>
  <div class="preview">
    <img :src="image" class="img" @click="flag = true" v-if="!flag">
    <div class="content flex a-center j-center" v-if="flag" @click="flag=false">
      <img :src="image" class="img" @click="flag = false">
    </div>
  </div>

</template>

<script>
  export default {
    name: "ImagePreview",
    components: {},
    props: {
      image: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        flag: false
      }
    },
    methods: {
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {

    }
  }
</script>

<style scoped lang="scss">
  .preview {
    width: 100%;
    height: 100%;
    .img {
      cursor: zoom-in;
      width: auto;
      height: 100%;
    }
    .content {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.5);
      z-index: 10;
      img {
        cursor: zoom-out;
      }
    }
  }

</style>
