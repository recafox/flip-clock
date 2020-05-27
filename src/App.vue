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
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
