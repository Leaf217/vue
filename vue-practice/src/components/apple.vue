<template>
    <div>
      <h1>{{ msg }}</h1>
      <router-link :to="{path: 'apple/redApple'}">to red apple</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
          name: "apple",
          data() {
            return {
              msg: "I am an apple."
            }
        }
    }
</script>

<style scoped>

</style>
