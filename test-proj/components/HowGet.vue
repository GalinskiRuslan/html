<template>
  <div class="image-content" id="get">
    <div class="container">
      <h3 class="block-title">Как получить?</h3>
      <div class="flex space-b">
        <p class="block-subtitle">терминалы</p>
        <div class="line"></div>
      </div>
      <div class="grid grid2col">
        <div>
          <img src="../static/img/Терминалы вектор.png" class="get-img" />
        </div>
        <div>
          <p class="get-title">
            Получите деньги через наши <br />терминалы
            <span class="blue">T-mat</span>
          </p>
          <ul class="get-list">
            <li class="get-li">
              Выбираете удобное для вас расположение
              <span class="blue">терминала</span>
            </li>
            <li class="get-li">
              Выбираете кнопку <span class="blue">“Получить кредит”</span>
            </li>
            <li class="get-li">
              Введите номер телефона и подтвердите его <span> кодом</span>
            </li>
            <li class="get-li">
              Сканируйте ваш <span class="blue">паспорт</span> и сделайте
              <span class="blue">фотографию</span> лица
            </li>
            <li class="get-li">
              Выберите нужную сумму и срок, нажмите
              <span class="blue">“Получить деньги”</span>
            </li>
            <li class="get-li">
              Подписать <span class="blue">договор SMS кодом</span>
            </li>
            <li class="get-li">
              Моментально <span class="blue">терминал выдаст</span> вам
              одобренную сумму
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageUrl"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.image-content {
  max-width: 1920px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url("../static/img/backimage1.png");
}
.block-subtitle {
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  text-transform: uppercase;
  color: #267ee4;
}
.line {
  border-bottom: 0.5px solid #267ee4;
  width: 82%;
  margin-bottom: 40px;
}
.get-title {
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: #000000;
}
.get-list {
  list-style-image: url("../static/img/Ellipse-list.png");
  padding-left: 0px;
  margin-left: -10px;
}
.get-li {
  padding: 8px 0;
}
.get-img {
  margin-bottom: 40px;
}
@media screen and (max-width: 940px) {
  .get-img {
    margin-bottom: 40px;
    width: 100%;
  }
}
</style>