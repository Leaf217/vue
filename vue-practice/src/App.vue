<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-text="title"></h1>
    <!--<input v-model="newItem" v-on:keyup.enter="addNew">-->
    <input v-model="newItem">
    <button v-on:click="addNew">addItem</button>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>

    <!--一旦触发my-event自定义事件，就会执行onMyEvent这个方法-->
    <!--<hello-world v-on:my-event="onMyEvent" number="Hello World!"></hello-world>-->

    <!--<div class="trans">-->
      <!--<button v-on:click="toggleCom">toggle</button>-->
      <!--<transition name="my-trans">-->
        <!--<div v-bind:is="currentView"></div>-->
        <!--&lt;!&ndash;<p v-if="show">i am show</p>&ndash;&gt;-->
      <!--</transition>-->

    <!--</div>-->
    <div>
      <router-link :to="{path: 'apple'}">to apple</router-link>
      <router-link :to="{path: 'banana'}">to banana</router-link>

    </div>
      <router-view></router-view>
  </div>

</template>

<script>
  import Store from './store.js';
  import HelloWorld from './components/HelloWorld';
  import comA from './components/comA';
  import comB from './components/comB';
  export default {
    //template中使用的数据
    data: function() {
      return {
        title: 'This is a todo list',
        items: Store.fetch(), //直接从localStorage中取出
        newItem: '',
        bizLine: [],
        show: false,
        currentView: 'com-a'
      }
    },

    //注册组件
    components: {
      'hello-world': HelloWorld,
      'com-a': comA,
      'com-b': comB
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
      },
      toggleCom () {
        if (this.currentView === 'com-a') {
          this.currentView = 'com-b';
        }
        else {
          this.currentView = 'com-a';
        }
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

  /*当设置transition的name值为fade时应用的过渡效果*/
  .fade-enter-active, .fade-leave-active {
    /*什么属性使用过渡 过渡时间 过渡动画曲线*/
    transition: opacity .5s ease-out;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  /* 其他的的状态的opacity默认都为1，所以不用设置*/


  /*当设置transition的name值为my-trans时应用的过渡效果*/
  .my-trans-enter-active, .my-trans-leave-active {
    transition: all .5s linear;
  }
  .my-trans-enter {
    transform: translateY(-500px);
    opacity: 0;
  }
  .my-trans-leave-to {
    transform: translateY(500px);
    opacity: 0;
  }


</style>
