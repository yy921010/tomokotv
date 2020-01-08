<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    this.$session.put('demo', {
      username: '1'
    })
    this.$session.put('demo1', {
      username: '1'
    })
    this.$session.put('demo2', {
      username: '1'
    })

    this.$session.remove('demo')
  }
}
</script>
