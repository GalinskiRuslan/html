<template>
  <div class="container padding-b">
    <h3 class="block-title text-center">Наши партнеры</h3>
    <div class="flex space-b margin-b text-center">
      <div class="partner-card">
        <img src="../static/img/part1.png" alt="1" class="img" />
      </div>
      <div class="partner-card">
        <img src="../static/img/part2.png" alt="2" class="img" />
      </div>
      <div class="partner-card">
        <img src="../static/img/part3.png" alt="3" class="img" />
      </div>
    </div>
    <div class="flex space-b text-center">
      <div class="partner-card">
        <img src="../static/img/part4.png" alt="4" class="img" />
      </div>
      <div class="partner-card">
        <img src="../static/img/part5.png" alt="5" class="img" />
      </div>
      <div class="partner-card">
        <img src="../static/img/part6.png" alt="6" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.padding-b {
  padding-bottom: 100px;
}
@media screen and (max-width: 940px) {
  .partner-card {
    margin-bottom: 50px;
    margin-left: auto;
  }
  .img {
    width: 90%;
  }
}
</style>