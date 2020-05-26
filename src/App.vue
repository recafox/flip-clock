<template>
  <div id="app">
    <flip-clock/>
  </div>
</template>

<script>
import FlipClock from './components/FlipClock.vue'

export default {
  name: 'App',
  components: {
    FlipClock,
  }
}
</script>

<style style='scss'>

#app{
  width:100%;
  height:600px;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
