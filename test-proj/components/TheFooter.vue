<template>
  <div class="back-container" id="contact">
    <div class="container">
      <img src="../static/img/mob-menu-w.png" />
      <div class="flex space-b">
        <div>
          <div class="flex space-b">
            <a
              target="_blank"
              class="footer-inf-p"
              href="https://yandex.kz/maps/162/almaty/house/Y08Yfw5mSEICQFppfX9wdH9gYg==/?ll=76.996175%2C43.315336&z=17.09"
            >
              <div class="flex margin-r">
                <div class="image-footer">
                  <img src="../static/img/Vectoraddres.png" />
                </div>
                <div>
                  <p class="footer-title">Адрес</p>
                  <p class="footer-p">050019, г.Алматы мкр-н Кайрат, 282</p>
                </div>
              </div>
            </a>
            <div class="flex margin-r">
              <div class="image-footer">
                <img src="../static/img/Vectorphone.png" />
              </div>
              <div>
                <p class="footer-title">Контакты</p>
                <p class="footer-p">
                  <a href="tel: +7 777 070 00 00" class="footer-p"
                    >+7 777 070 00 00</a
                  >
                </p>
              </div>
            </div>
            <div class="flex margin-r">
              <div class="image-footer">
                <img src="../static/img/Vectormail.png" />
              </div>
              <div>
                <p class="footer-title">Почта</p>
                <p class="footer-p">@info.t-mat.com</p>
              </div>
            </div>
          </div>
          <div class="flex margin-top">
            <p class="footer-p">Скачивай приложение через:</p>
            <img
              src="../static/img/Play Matket 1 (1).png"
              class="margin-left"
            />
          </div>
        </div>
        <div class="flex">
          <div class="desctop">
            <p><a href="#about" class="footer-p">О нас</a></p>
            <p><a href="#get" class="footer-p">Как получить?</a></p>
            <p><a href="#return" class="footer-p">Как погасить?</a></p>
          </div>
          <div class="desctop margin-left">
            <p><a href="#faq" class="footer-p">FAQ</a></p>
            <p><a href="#doc" class="footer-p">Документы</a></p>
          </div>
        </div>
      </div>
      <div class="text-center margin-top">
        <p class="text-center footer-p">© Алматы 2022</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.back-container {
  background: #333333;
  padding-top: 52px;
  padding-bottom: 30px;
}
.footer-title {
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
  padding: 0;
  margin: 0;
}
.footer-p {
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
}
.margin-r {
  margin-right: 45px;
}
.image-footer {
  margin-right: 25px;
  margin-top: 12px;
}
.margin-left {
  margin-left: 30px;
}
.margin-top {
  margin-top: 30px;
}
</style>