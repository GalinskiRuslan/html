<template>
  <div class="container">
    <h3 class="block-title text-center">Наши преимущества</h3>
    <div class="flex space-a">
      <div>
        <div class="advan-img">
          <img src="../static/img/asdasdwa.png" alt="a" />
        </div>
        <p class="advan-title">Мгновенное получение</p>
        <p class="advat-p">
          Денежные средства мгновенно<br />
          поступают на банковскую карту
        </p>
      </div>
      <div>
        <div class="advan-img">
          <img src="../static/img/adve.png" alt="b" />
        </div>
        <p class="advan-title">Конфиденциальность</p>
        <p class="advat-p">
          Мы не проверяем информацию <br />
          у третьих лиц
        </p>
      </div>
      <div>
        <div class="advan-img">
          <img src="../static/img/preimush.png" alt="c" />
        </div>
        <p class="advan-title">Честность</p>
        <p class="advat-p">
          Только честная и понятная ставка<br />
          за день пользования займом
        </p>
      </div>
      <div>
        <div class="advan-img"><img src="../static/img/pre.png" alt="d" /></div>
        <p class="advan-title">Работаем 24/7</p>
        <p class="advat-p">
          Мгновенная выдача займов онлайн 7 дней<br />
          в неделю 24 часа в сутки
        </p>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.advan-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: auto;
}
.advan-title {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #000000;
}
.advat-p {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #666666;
}
.line {
  border-bottom: 1px solid #267ee4;
  width: 91%;
  margin: auto;
  padding-top: 70px;
}
@media screen and (max-width: 940px) {
}
</style>