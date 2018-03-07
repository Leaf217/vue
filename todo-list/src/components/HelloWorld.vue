<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ number }}</p>
    <!--点击button，就会执行emitMyEvent这个方法-->
    <button v-on:click="emitMyEvent">emit</button>
  </div>


</template>

<script>
export default {
  props: ['number'],
  data () {
    return {
      msg: '自定义事件'
    }
  },
  methods: {
    emitMyEvent () {
      this.$emit('my-event', this.msg );//触发my-event这个自定义事件，再去看父组件APP
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

</style>
