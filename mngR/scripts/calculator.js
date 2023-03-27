let _config = {
  calc: {
    minSum: 10000,
    toTwentySum: 30000,
    toThirtySum: 110000,
    maxSum: 300000,
    minDays: 10,
    middleDays: 20,
    maxDays: 30,
    sumStep: 10000,
    percentTen: 1,
    percentFifty: 0.75,
    percentTwenty: 0.6666666666666667,
    sumSelector: "#myinput",
    daysSelector: "#myinput2",
  },
};

function sliderInit(selector) {
  const slider = document.querySelector(selector);
  const min = slider.min;
  const max = slider.max;
  const value = slider.value;

  slider.style.cssText +=
    ";" +
    `background: linear-gradient(to right,#EE368E ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 100%); background: -webkit-linear-gradien(to right, #a103ee, #f1783b ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 100%); background: -moz-linear-gradien(to right, #a103ee, #f1783b ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%);`;

  slider.oninput = function () {
    this.style.cssText +=
      ";" +
      `background: linear-gradient(to right, #EE368E ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%); background: -webkit-linear-gradient(to right, #a103ee, #f1783b ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%); background: -moz-linear-gradient(to right, #a103ee, #f1783b ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%);`;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const sumFrom = document.querySelector("#sumFrom");
  const sumTo = document.querySelector("#sumTo");
  const daysFrom = document.querySelector("#daysFrom");
  const daysTo = document.querySelector("#daysTo");
  const loader = document.querySelector("#infoCrCal");

  sumFrom.innerText = _config.calc.minSum;
  sumTo.innerText = _config.calc.maxSum;
  daysFrom.innerText = _config.calc.minDays;
  daysTo.innerText = _config.calc.maxDays;

  const $sum = document.querySelector(_config.calc.sumSelector);
  const $days = document.querySelector(_config.calc.daysSelector);

  const $daysText = document.querySelector("#daysText");
  const $sumText = document.querySelector("#sumText");
  const $daysTextPreview = document.querySelector("#daysTextPreview");
  const $sumTextPreview = document.querySelector("#sumTextPreview");
  const $returnSumText = document.querySelector("#returnSumText");

  function calc() {
    $daysText.innerText = $days.value;
    $sumText.innerText = $sum.value;
    $daysTextPreview.innerText = $days.value;
    $sumTextPreview.innerText = $sum.value;

    // loader.classList.add('loader')
    // function removeLoader() {
    //     loader.classList.remove('loader')
    // }
    // setTimeout(removeLoader, 1000)

    if ($days.value == 10) {
      let newSum = Math.round(
        (_config.calc.percentTen / 100) * $sum.value * $days.value +
          $sum.value * 1
      );
      $returnSumText.innerText = newSum;
    } else if ($sum.value < 40000 && $days.value == 20) {
      $sum.value = 40000;
      $sumText.innerText = 40000;
      let newSum = Math.round(
        (_config.calc.percentTen / 100) * $sum.value * $days.value +
          $sum.value * 1
      );
      $returnSumText.innerText = newSum;
    } else if ($sum.value <= 110000 && $days.value == 20) {
      let newSum = Math.round(
        (_config.calc.percentTen / 100) * $sum.value * $days.value +
          $sum.value * 1
      );
      $returnSumText.innerText = newSum;
    } else if ($sum.value > 110000 && $days.value == 20) {
      let newSum = Math.round(
        (_config.calc.percentFifty / 100) * $sum.value * $days.value +
          $sum.value * 1
      );
      $returnSumText.innerText = newSum;
    } else if ($days.value == 30) {
      if ($sum.value < 120000) {
        $sum.value = 120000;
        $sumText.innerText = 120000;
        let newSum = Math.round(
          (_config.calc.percentTwenty / 100) * $sum.value * $days.value +
            $sum.value * 1
        );
        $returnSumText.innerText = newSum;
      } else {
        let newSum = Math.round(
          (_config.calc.percentTwenty / 100) * $sum.value * $days.value +
            $sum.value * 1
        );
        $returnSumText.innerText = newSum;
      }
    }
  }
  if ($sum && $days) {
    sumFrom.innerText = 40000;
  }
  $days.addEventListener("input", () => {
    calc();
    if ($days.value == 10) {
      $sum.setAttribute("max", _config.calc.maxSum);
      $sum.setAttribute("min", _config.calc.minSum);
      $sum.setAttribute("step", _config.calc.sumStep);
      sumFrom.innerText = 10000;
      sumTo.innerText = 300000;
      $sumTextPreview.innerHTML = $sum.value;
      sliderInit("#myinput");
      sliderInit("#myinput2");
    } else if ($days.value == 20) {
      $sum.setAttribute("max", _config.calc.maxSum);
      $sum.setAttribute("min", 40000);
      $sum.setAttribute("step", _config.calc.sumStep);
      sumFrom.innerText = 40000;
      sumTo.innerText = 300000;
      $sumTextPreview.innerHTML = $sum.value;
      sliderInit("#myinput");
      sliderInit("#myinput2");
    } else if ($days.value == 30) {
      $sum.setAttribute("max", _config.calc.maxSum);
      $sum.setAttribute("min", 120000);
      $sum.setAttribute("step", _config.calc.sumStep);
      sumFrom.innerHTML = 120000;
      sumTo.innerHTML = 300000;
      $sumTextPreview.innerHTML = $sum.value;
      sliderInit("#myinput");
      sliderInit("#myinput2");
    }
  });
  $sum.addEventListener("input", () => {
    calc();
  });
  calc();
  sliderInit("#myinput");
  sliderInit("#myinput2");
});
