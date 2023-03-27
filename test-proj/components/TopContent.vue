<template>
  <div class="top-container">
    <div class="container grid top-grid">
      <div>
        <h2 class="top-title">
          Быстрые<br />
          онлайн - займы
        </h2>
        <p class="top-subtitle">Займы на карту и наличными без выходных 24/7</p>
        <div class="top-flex margin-b">
          <img src="../static/img/top-img1.png" alt="img" class="top-img" />
          <p class="top-text">
            Деньги на карту<br />
            и наличными
          </p>
          <img src="../static/img/top-img2.png" alt="" class="top-img" />
          <p class="top-text">Моментальное <br />получение</p>
          <img src="../static/img/top-img3.png" alt="" class="top-img" />
          <p class="top-text">
            Без проверок<br />
            и поручителей
          </p>
        </div>
        <p class="top-bottom desctop">
          Получи наличные в терминале и на карту через<br />
          прилложение
          <span class="pink-text">в 3 клика за МИНУТУ</span>
        </p>
        <img src="../static/img/Play Matket 1 (1).png" class="desctop" />
      </div>
      <div><credic-calc></credic-calc></div>
      <div class="mobile">
        <p class="padding-t">
          Получи наличные в терминале и на карту через<br />
          прилложение
          <span class="pink-text">в 3 клика за МИНУТУ</span>
        </p>
        <img src="../static/img/Play Matket 1 (1).png" />
      </div>
    </div>
  </div>
</template>

<script>
import CredicCalc from "./CredicCalc.vue";
export default {
  components: { CredicCalc },
};
</script>

<style scoped>
.top-flex {
  display: flex;
}
.top-container {
  background: linear-gradient(100.69deg, #f5f5f5 -0.85%, #f7f7f7 100.91%);
  padding-top: 130px;
  padding-bottom: 50px;
}
.top-grid {
  grid-template-columns: 1fr 1fr;
}
.top-img {
  width: 50px;
  height: 50px;
}
.top-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  padding: 10px;
  padding-right: 17px;
}
.pink-text {
  color: #ee368e;
  font-weight: 600;
  font-size: 16px;
}
.top-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  color: #267ee4;
}
.top-subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 40px;
}
.top-bottom {
  margin-top: 150px;
  font-weight: 400;
  font-size: 16px;
}
.padding-t {
  padding-top: 30px;
}
@media screen and (max-width: 940px) {
  .top-grid {
    grid-template-columns: 1fr;
  }
  .top-flex {
    display: none;
  }
}
</style>