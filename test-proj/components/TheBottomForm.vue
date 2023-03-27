<template>
  <div class="back-container">
    <div class="container">
      <div class="grid grid2col">
        <div>
          <h3 class="form-title">НА случай если у вас еще остались вопросы</h3>
          <form action="form">
            <p class="enter-form">Заполните форму</p>
            <p class="form-ask">
              Наши специалисты свяжуться с вами в ближайшее время
            </p>
            <input
              type="name"
              id="name"
              class="form-input"
              placeholder="Введите ваше имя *"
              required
            />
            <input
              id="phone"
              type="tel"
              class="form-input"
              placeholder="Ваш номер телефона *"
              maxlength="14"
              required
            />
            <input
              id="mail"
              type="email"
              class="form-input"
              placeholder="Ваша почта *"
              required
            />
            <button class="form-btn">Отправить</button>
          </form>
        </div>
        <div class="desctop">
          <img src="../static/img/form-girl.png" class="form-girl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.back-container {
  background: linear-gradient(102.56deg, #267ee4 -0.82%, #ee368e 137.22%);
}
.form-title {
  font-weight: 900;
  font-size: 36px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 45px;
}
.enter-form {
  font-weight: 700;
  font-size: 26px;
  color: #fbd13e;
}
.form-ask {
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
}
.form-btn {
  background: #fbd13e;
  border-radius: 8px;
  color: #ffffff;
  padding: 15px 35px;
  border: none;
  margin-top: 30px;
}
.form-input {
  background-color: inherit;
  color: #ffffff;
  width: 540px;
  height: 40px;
  border: none;
  border-bottom: 0.8px solid #ffffff;
  font-size: 1.3em;
  margin-top: 15px;
}
::placeholder {
  color: #ffffff;
  font-size: 1.2em;
}
a:focus {
  outline: none !important;
}
input:focus {
  outline: none !important;
}
.form-girl {
  margin-top: 52px;
}
@media screen and (max-width: 940px) {
  .back-container {
    padding-bottom: 30px;
  }
  .form-input {
    width: 97%;
  }
}
@media screen and (max-width: 1060px) {
  .desctop2 {
    display: none;
  }
  .form-girl {
    width: 90%;
  }
}
</style>