<template>
  <div class="calc-container">
    <h4 class="calc-title margin-b">Кредитный калькулятор</h4>
    <form>
      <label class="flex space-b"
        ><p class="calc-text">Выберите сумму</p>
        <span class="calc-gold">{{ sumValue }} MNT</span></label
      >
      <input
        type="range"
        v-model.number="sumValue"
        :min="minSum"
        max="1000000"
        step="10000"
      />
      <div class="flex space-b margin-b">
        <p class="calc-text-small">{{ minSum }}</p>
        <p class="calc-text-small">1000000</p>
      </div>
      <label class="flex space-b"
        ><p class="calc-text">Выберите срок</p>
        <span class="calc-gold">{{ timeValue }} Дней</span></label
      >
      <input type="range" v-model.number="timeValue" min="8" max="30" />
      <div class="flex space-b margin-b">
        <p class="calc-text-small">8</p>
        <p class="calc-text-small">30</p>
      </div>
    </form>
    <div class="clac-item flex space-b">
      <p class="calc-text">Сумма займа:</p>
      <span class="calc-gold">{{ sumValue }} MNT</span>
    </div>
    <div class="clac-item flex space-b">
      <p class="calc-text">Срок займа:</p>
      <span class="calc-gold">{{ timeValue }} дней</span>
    </div>
    <div class="clac-item flex space-b">
      <p class="calc-text">Вознаграждение:</p>
      <span class="calc-gold"> {{ remuneration }} MNT</span>
    </div>
    <div class="clac-item flex space-b">
      <p class="calc-text">Общая сумма возврата:</p>
      <span class="calc-gold"> {{ sumValue + remuneration }} MNT</span>
    </div>
    <button class="calc-get">получить</button>
  </div>
</template>

<script>
export default {
  data() {
    return { sumValue: 50000, timeValue: 10 };
  },
  methods: {
    log() {
      console.log();
    },
  },
  computed: {
    minSum() {
      this.log();
      if (this.timeValue < 11) {
        return 10000;
      } else if (this.timeValue > 10 && this.timeValue <= 20) {
        if (this.sumValue < 40000) {
          this.sumValue = 40000;
        }
        return 40000;
      } else {
        if (this.sumValue < 120000) {
          this.sumValue = 120000;
        }
        return 120000;
      }
    },
    remuneration() {
      if (this.timeValue < 11) {
        return 0.01 * this.sumValue * this.timeValue;
      } else if (this.timeValue > 10 && this.timeValue < 21) {
        return 0.0075 * this.sumValue * this.timeValue;
      } else {
        return 0.006 * this.sumValue * this.timeValue;
      }
    },
  },
};
</script>

<style score>
.calc-container {
  background-color: #267ee4;
  max-width: 388px;
  border-radius: 30px;
  text-align: center;
  margin-left: auto;
  padding: 39px 36px;
  padding-bottom: 25px;
}
.calc-get {
  background: #ee368e;
  box-shadow: 0px 0px 20px 5px rgba(255, 216, 0, 0.1);
  border-radius: 8px;
  color: #ffffff;
  padding: 20px 60px;
  border: none;
  cursor: pointer;
}
.calc-title {
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  text-align: start;
}
.calc-text {
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.calc-text-small {
  font-size: 12px;
  line-height: 19px;
  color: #ffffff;
}
.calc-gold {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #fbd13e;
}
.margin-b {
  margin-bottom: 25px;
}
input {
  width: 100%;
}
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  overflow: inherit;
  height: 4px;
  border-radius: 20px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #ee368e;
  cursor: pointer;
  margin-top: -4px;
  /* box-shadow: -255px 0px 0px -1px #A65BBF, 
5px -5px 5px 0px #A8BF5D; */
  width: 30px;
  height: 30px;
  border-radius: 100%;
  /* border: 1px solid #000000; */
  z-index: 999;
}
input[type="range"]::-webkit-slider-runnable-track {
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  color: #ee368e;
  background-color: #ee368e;
}
</style>