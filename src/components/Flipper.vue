<template>
  <div class='flip down' :class='{"go": isFlipping===true}'>
    <div class='digital front' :class='_textClass(frontTextFromData)'></div>
    <div class='digital back' :class='_textClass(backTextFromData)'></div>
  </div>
</template>

<script>
export default {
  name:'Flipper',
  props:[
    'frontText',
    'backText',
    'duration',
  ],
  data(){
    return {
      isFlipping: false,
      frontTextFromData: 1,
      backTextFromData: 0,
    }
  },
  methods: {
    _textClass(number) {
      if (number) {
        return `number${number}`
      }
      return 'number0';
    },
    setFront(text) {
      const vm = this;
      vm.frontTextFromData = text;
    },
    setBack(text) {
      const vm = this;
      vm.backTextFromData = text;
    },
    flipDown(front, back) {
      const vm = this;
      if(vm.isFlipping) {
        return false;
      }
      vm.isFlipping = true;
      vm.frontTextFromData = front;
      vm.backTextFromData = back;
      setTimeout(() => {
        vm.isFlipping = false;
        vm.frontTextFromData = back;
      }, 600);

    }
  },
  mounted() {
    const vm = this;
    vm.frontTextFromData = vm.frontText;
    vm.backTextFromData = vm.backText;

  }
}
</script>

<style lang='scss'>
@import '../assets/all.scss';

.flip{
  display:inline-block;
  position: relative;
  width:50%;
  height:200px;
  line-height: 200px;
  font-size: 120px;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  @include mobile{
    height:170px;
    line-height: 170px;
    font-size: 90px;
  }
  
}

.flip .digital:before,
.flip .digital:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  background-color: $green;
  overflow: hidden;
  box-sizing: border-box;
}

/* before為上半張 */
.flip .digital:before {
  top: 0;
  bottom: 50%;
}
/* after為下半張 */
.flip .digital:after {
  top: 50%;
  bottom: 0%;
  line-height: 0;
}

.flip.down .front:before {
  z-index: 3;
}

.flip.down .back:after{
  z-index: 2;
  transform-origin: 50% 0;
  -webkit-transform: perspective($perspective) rotate(180deg);
  transform: perspective($perspective) rotate(180deg);
}

.flip.down .front:after,
.flip.down .back:before {
  z-index: 1;
}

.flip.down.go .front:before {
  transform-origin: 50% 100%;
  animation: frontFlipDown 0.6s ease-in-out both;
  backface-visibility: hidden;
}

.flip.down.go .back:after {
  animation: backFlipDown 0.6s ease-in-out both;
}


@keyframes frontFlipDown {
  0% {
    -webkit-transform: perspective($perspective) rotateX(0deg); 
    transform: perspective($perspective) rotateX(0deg);
  }
  100% {
    -webkit-transform:perspective($perspective) rotateX(180deg);
    transform:perspective($perspective) rotateX(180deg);
  }
}

@keyframes backFlipDown {
  0% {
    -webkit-transform: perspective($perspective) rotateX(180deg);
    transform: perspective($perspective) rotateX(180deg);
  }
  100% {
    -webkit-transform:perspective($perspective) rotateX(0deg);
    transform:perspective($perspective) rotateX(0deg);
  }
}

/*設定牌面數字為0~9*/
.flip .number0:before,
.flip .number0:after {
  content: '0';
}

.flip .number1:before,
.flip .number1:after {
  content: '1';
}

.flip .number2:before,
.flip .number2:after {
  content: '2';
}

.flip .number3:before,
.flip .number3:after {
  content: '3';
}

.flip .number4:before,
.flip .number4:after {
  content: '4';
}

.flip .number5:before,
.flip .number5:after {
  content: '5';
}

.flip .number6:before,
.flip .number6:after {
  content: '6';
}

.flip .number7:before,
.flip .number7:after {
  content: '7';
}

.flip .number8:before,
.flip .number8:after {
  content: '8';
}

.flip .number9:before,
.flip .number9:after {
  content: '9';
}



</style>