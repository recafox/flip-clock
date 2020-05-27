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

<style lang='scss'>
@import './assets/all.scss';

#app{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @include pad{
    background-size: auto 100%;
  }
}
</style>
