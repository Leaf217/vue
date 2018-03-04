<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import Store from './store.js';
  import HelloWorld from './components/HelloWorld';
  export default {
    //template中使用的数据
    data: function() {
      return {
        title: 'This is a todo list',
        items: Store.fetch(), //直接从localStorage中取出
        newItem: ''
      }
    },

    //注册组件
    components: {HelloWorld},

    //观察items的变化，然后对localStorage进行操作
    watch: {
      items: {
        handler: function (items) {
          Store.save(items);
          },
        deep: true
      }
    },

    //方法，data中的数据在methods中都可以访问到
    methods: {
      //切换finish的状态
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished;
      },
      addNew: function () {
        this.items.push(
          {
            label: this.newItem,
            isFinished: false
          }
          );
        this.newItem = '';
      }
    }
  }
</script>

<style>
  .finished {
    color: #ffabbb;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
