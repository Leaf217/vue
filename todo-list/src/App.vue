<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <!--<input v-model="newItem" v-on:keyup.enter="addNew">-->
    <input v-model="newItem">
    <button v-on:click="addNew">addItem</button>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>

    <input type="checkbox" id="flash" value="flash" v-model="bizLine">
    <label for="flash">快车</label>
    <input type="checkbox" id="bus" value="bus" v-model="bizLine">
    <label for="bus">巴士</label>
    <span>{{ bizLine}}</span>

    <!--一旦触发my-event自定义事件，就会执行onMyEvent这个方法-->
    <hello-world v-on:my-event="onMyEvent"></hello-world>
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
        newItem: '',
        bizLine: []
      }
    },

    //注册组件
    components: {
      HelloWorld: HelloWorld
    },

    //观察items的变化，一旦有变化就对localStorage进行操作
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
      toggleFinish (item) {
        item.isFinished = !item.isFinished;
      },
      addNew () {
        if (this.newItem) {
          this.items.push(
            {
              label: this.newItem,
              isFinished: false
            }
          );
          this.newItem = '';
        }
      },
      onMyEvent (para) {
        console.log('onMyEvent' + para);
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
