<template>
  <div class="faq-back text-center" id="faq">
    <div class="container">
      <h3 class="block-title">FAQ</h3>
      <faq-card
        v-for="item in faqContent"
        :key="item.id"
        :faqAnswer="item.answer"
        :faqQuestion="item.question"
      ></faq-card>
    </div>
  </div>
</template>

<script>
import FaqCard from "./FaqCard.vue";
export default {
  data() {
    return {
      faqContent: [
        {
          id: 0,
          question: "Кто может получить заём в T-mat ?",
          answer: "Кто угодно!",
        },
        {
          id: 1,
          question: "Какие документы нужны для оформления онлайн-займа?",
          answer:
            "Для оформления кредита требуется только оригинал удостоверения личности гражданина Азербайджанской Республики. Внимание! Невозможно оформить кредит с просроченным или поврежденным удостоверением личности",
        },
        {
          id: 2,
          question: "Сколько времени будет рассматриваться моя заявка?",
          answer: "Не долго!",
        },
        {
          id: 3,
          question: "Как погасить заём?",
          answer:
            "Оплату можно произвести: 1) через терминал Kreditomat.kz (бесплатно) Для того, чтобы произвести погашение с помощью банкоматов Kreditomat / DOZP, необходимо: Найти ближайший к вам терминал KREDITOMAT.KZ; Ввести номер телефона/ИИН; Внести через купюроприемник сумму погашения; 2) через Qiwi терминал. (Выбираете «оплата услуг» - погашение кредитов/фин.услуг - МКО/МФО – kreditomat.kz), (при оплате взимается комиссия за осуществление перевода от 1 - 3%). Оплату с помощью карты Вы можете произвести в мобильном приложении. Для этого вам необходимо в «Личном кабинете» нажать кнопку «оплатить микрокредит». Выбрать удобный способ погашения (банковской картой). Выбрать карту, с которой необходимо списать деньги, либо добавить новую. В случае успешной оплаты вы получите уведомление.",
        },
        {
          id: 4,
          question: "Что делать, если не успеваю погасить заём?",
          answer:
            "Вы можете воспользоваться услугой продления займа, оплатив только фактически начисленные проценты. Таким образом вы автоматически продлеваете срок кредита на 30 календарных дней.",
        },
      ],
    };
  },

  components: { FaqCard },
};
</script>

<style scoped>
.faq-back {
  background: linear-gradient(
    100.69deg,
    #ececec -0.85%,
    #ffffff 52.62%,
    #ececec 99.46%
  );
  padding-bottom: 70px;
}
.faq {
  background: linear-gradient(
    100.69deg,
    #ececec -0.85%,
    #ffffff 52.62%,
    #ececec 99.46%
  );
  padding-top: 50px;
}
</style>