<template>
  <div class='FlipClock'>
    <div class='card-wrapper'>
      <div class='card'>
        <div class='card__number'>
          <flipper ref='flipperDay1'></flipper>
          <flipper ref='flipperDay2'></flipper>
        </div>
        <div class='card__text'>
          <p>Days</p>
        </div>
      </div>
      <div class='card'>
        <div class='card__number'>
          <flipper ref='flipperHour1'></flipper>
          <flipper ref='flipperHour2'></flipper>
        </div>
        <div class='card__text'>
          <p>Hours</p>
        </div>
      </div>
    </div>
    <div class='card-wrapper'>
      <div class='card'>
        <div class='card__number'>
          <flipper ref='flipperMinute1'></flipper>
          <flipper ref='flipperMinute2'></flipper>
        </div>
        <div class='card__text'>
          <p>Minutes</p>
        </div>
      </div>
      <div class='card'>
        <div class='card__number'>
          <flipper ref='flipperSecond1'></flipper>
          <flipper ref='flipperSecond2'></flipper>
        </div>
        <div class='card__text'>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flipper from './Flipper.vue'

export default {
  name:'FlipClock',
  components: {
    Flipper,
  },
  data() {
    return {
      timer: null,
      flipObjs: [],
      now: 86400*3,
    }
  },
  methods: {
    init() {
      const vm = this;
      let timeStr = vm.formatTime(vm.now);
      for( let i = 0; i < vm.flipObjs.length; i++) {
        vm.flipObjs[i].setFront(timeStr[i]);
      }
      
    },
    formatTime(time) {
      const vm = this;
      const secondToDay = 86400;
      const secondToHour = 3600;
      const secondToMinute = 60;
      let leftDay = vm.padLeftZero(parseInt(time / secondToDay).toString());
      let tempHour = time % secondToDay;
      let leftHour = vm.padLeftZero(parseInt(tempHour / secondToHour).toString());
      let tempMin = time % (leftDay*secondToDay + leftHour*secondToHour);
      let leftMinute =vm.padLeftZero(parseInt(tempMin / secondToMinute).toString());
      let leftSecond = vm.padLeftZero((time % (leftDay*secondToDay + leftHour*secondToHour + leftMinute*secondToMinute)).toString());
      return `${leftDay}${leftHour}${leftMinute}${leftSecond}`;
    },
    run() {
      const vm = this;
      vm.timer = setInterval(() => {
        let nowTimeStr = vm.formatTime(vm.now);
        let nextTimeStr = vm.formatTime(vm.now - 1);
        for(let i = 0; i < vm.flipObjs.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]){
            continue;
          }
          vm.flipObjs[i].flipDown(
            nowTimeStr[i],
            nextTimeStr[i]
          )
        }
        vm.now -= 1;
      }, 1000);
    },
    padLeftZero(str) {
      return ('00' + str).substr(str.length);
    }
  },
  mounted() {
    const vm = this;
    vm.flipObjs = [
      vm.$refs.flipperDay1,
      vm.$refs.flipperDay2,
      vm.$refs.flipperHour1,
      vm.$refs.flipperHour2,
      vm.$refs.flipperMinute1,
      vm.$refs.flipperMinute2,
      vm.$refs.flipperSecond1,
      vm.$refs.flipperSecond2,      
    ];
    vm.init();
    setTimeout(() => {
      vm.run();
    }, 600);
  }
  
}
</script>

<style lang='scss'>
@import '../assets/all.scss';

.FlipClock{
  width: 90%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  @include pad {
    flex-direction: column;
  }
}

.card-wrapper{
  display:flex;
  justify-content: space-evenly;
  width:40%;
  height:50%;
  @include pad{
    width: 70%;
  }
  @include mobile{
    width:100%;
  }
  .card{
    display:flex;
    flex-direction: column;
    align-items: center;
    width:50%;
    background: $gray;
    margin:1rem;
    @include mobile{
      margin: 0.3rem;
    }
    .card__number{
      display:flex;
      width:90%;
      justify-content: space-evenly;
      padding-top: 1rem;
    }
    .card__text{
      text-align: center;
      color:white;
      font-family: 'Microsoft JhengHei', sans-serif;
      font-size: 24px;
      line-height: 24px;
      margin-top: 1rem;;
      p{
        margin:0;
      }
    }
  }
}
</style>