<template>
  <details class="text-start">
    <summary>
      {{ faqQuestion }}
      <svg
        class="icon"
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.3711 0H10.3711V25H15.3711V0Z" fill="black" />
        <path
          d="M25.3711 15V10L0.371094 10L0.371094 15H25.3711Z"
          fill="black"
        />
      </svg>
      <svg
        class="minus"
        width="25"
        height="5"
        viewBox="0 0 25 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.371094" width="24" height="5" fill="white" />
      </svg>
    </summary>

    <div class="details-info">
      <div class="divider"></div>

      <p>
        {{ faqAnswer }}
      </p>
    </div>
  </details>
</template>

<script>
export default {
  props: ["faqQuestion", "faqAnswer"],
};
</script>

<style scoped>
.faq {
  background: linear-gradient(
    100.69deg,
    #ececec -0.85%,
    #ffffff 52.62%,
    #ececec 99.46%
  );
  padding-top: 50px;
}
.markLeftSmall {
  position: absolute;
  top: 25px;
  left: 16px;
}
.markLeftBig {
  position: absolute;
  left: 0;
  bottom: 30px;
  z-index: 1;
}
.markRight {
  position: absolute;
  right: 0;
  top: 16px;
}
.faq__title {
  position: relative;
  text-align: center;
}
.faq__title_yellow {
  font-size: 32px;
  font-weight: 900;
  font-family: "Anton", sans-serif;
  color: #ffd800;
  text-transform: uppercase;
}
.faq__title_yellow span {
  font-family: "Inter", sans-serif;
}
.faq__title_green {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-49%);
  font-size: 32px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px #00997e;
  text-transform: uppercase;
}
.faq__details {
  margin-top: 30px;
}
details {
  background: var(--collapse-bg);
  color: var(--collapse-color);
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  max-width: 996px;
  width: 100%;
  margin: 20px auto;
}
summary {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  cursor: pointer;
  list-style-type: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 1rem;
}
.details-info {
  padding: 1rem;
}
.details-info {
  border-top: 1px solid var(--collapse-line-color);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
summary .icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  transition: transform 0.26s;
  color: var(--collapse-icon-color);
}
details[open] summary .icon {
  display: none;
}
details[open] > summary {
  background: #267ee4;
  color: #fff;
}
details[open] .details-info {
  background: #267ee4;
  color: #fff;
}
.divider {
  margin-top: 0px;
  width: 100px;
  height: 2px;
  background: #ffffff;
}
.faq p {
  margin-top: 15px;
}
.text-start {
  text-align: start;
}
.minus {
  display: none;
}
details[open] summary .minus {
  display: block;
}
.min-hight {
  min-height: 800px;
}
.faq-img3 {
  position: absolute;
  margin-left: -800px;
  bottom: 250px;
}
.faq-img2 {
  position: absolute;
  margin-left: 491px;
}
.faq-img1 {
  position: absolute;
  margin-left: -681px;
  top: 50px;
}
</style>