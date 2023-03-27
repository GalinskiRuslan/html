<template>
  <div>
    <Header />
    <top-content></top-content>
    <how-get></how-get>
    <how-return />
    <about-block></about-block>
    <advantage-block></advantage-block>
    <documents-block></documents-block>
    <faq-block></faq-block>
    <partners-block></partners-block>
    <the-bottom-form></the-bottom-form>
    <the-footer></the-footer>
  </div>
</template>

<script>
import HowGet from "../components/HowGet.vue";
import TopContent from "../components/TopContent.vue";
import HowReturn from "../components/HowReturn.vue";
import AboutBlock from "../components/AboutBlock.vue";
import AdvantageBlock from "../components/AdvantageBlock.vue";
import DocumentsBlock from "../components/DocumentsBlock.vue";
import FaqBlock from "../components/FaqBlock.vue";
import PartnersBlock from "../components/PartnersBlock.vue";
import TheBottomForm from "../components/TheBottomForm.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  components: {
    TopContent,
    HowGet,
    HowReturn,
    AboutBlock,
    AdvantageBlock,
    DocumentsBlock,
    FaqBlock,
    PartnersBlock,
    TheBottomForm,
    TheFooter,
  },
  name: "IndexPage",
};
</script>
<style>
@font-face {
  font-family: "Inter";
  src: url("static/fonts/Inter-Regular.ttf");
}
body {
  font-family: "Inter";
}
html {
  scroll-behavior: smooth;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
ul {
  list-style: none;
}
li {
  margin: 0 30px;
}
a {
  color: #000000;
  text-decoration: none;
}
.flex {
  display: flex;
}
.space-a {
  justify-content: space-around;
}
.space-b {
  justify-content: space-between;
}
.item-c {
  align-items: center;
}
.grid {
  display: grid;
}
.grid2col {
  grid-template-columns: 1fr 1fr;
}
.grid3col {
  grid-template-columns: 2fr 1fr;
}
.mobile {
  display: none;
}
.block-title {
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: #8d32d4;
  margin: 80px 0 50px 0;
}
.blue {
  color: #267ee4;
  font-weight: 600;
}
.text-end {
  text-align: end;
}
.text-center {
  text-align: center;
}
@media screen and (max-width: 940px) {
  .container {
    max-width: 360px;
  }
  .desctop {
    display: none;
  }
  .mobile {
    display: block;
  }
  .grid2col {
    grid-template-columns: 1fr;
  }
  .flex {
    display: block;
  }
  .block-title {
    font-size: 32px;
    margin: 40px 0 30px 0;
  }
}
</style>