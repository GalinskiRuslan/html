<template>
  <div class="top-container" id="about">
    <div class="container">
      <h3 class="block-title margin0">О нас</h3>
      <div class="grid grid2col about-hight">
        <div class="about-r">
          <p class="about-title">
            <span class="blue">T-mat </span>предлагает удобные, доступные и, что
            самое главное, краткосрочные кредиты на основе современных
            технологий людям
          </p>
          <p class="about-content">
            <span class="blue">Основная цель</span> – предоставить заранее
            доступ к кредитам на основе высоких технологий, обеспечивая изучение
            потребительских потребностей своих клиентов, стать прозрачным
            финансовым учреждением в Монголии, предоставляя гражданам
            качественные и доступные финансовые услуги, занять особое место
            среди финансовых институтов, работающих в здоровой конкурентной
            среде в нашей стране.
          </p>
          <button class="about-button">Подробнее</button>
        </div>
        <div class="desctop about-img-div">
          <img src="../static/img/girlAbout.png" class="about-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-container {
  background: linear-gradient(100.69deg, #f5f5f5 -0.85%, #f7f7f7 100.91%);
  padding-top: 85px;
  width: 100%;
}
.about-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-top: 30px;
  color: #000000;
}
.about-img-div {
  position: relative;
  top: -200px;
  right: -60px;
}

.margin0 {
  margin: 0;
}
.about-hight {
  max-height: 463px;
}
.about-content {
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
}
.about-button {
  background: #267ee4;
  box-shadow: 0px 0px 20px 5px rgba(0, 153, 126, 0.1);
  border-radius: 8px;
  color: #ffffff;
  padding: 10px 25px;
  border: none;
}
.about-r {
  height: 69%;
}
@media screen and (max-width: 1280px) {
  .about-img {
    width: 100%;
  }
  .about-img-div {
    position: relative;
    top: -200px;
    right: 0;
  }
  .about-hight {
    max-height: 100%;
  }
}
@media screen and (max-width: 940px) {
  .about-r {
    height: 100%;
  }
}
</style>