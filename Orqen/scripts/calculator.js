//  Годовая ставка 41%, от 3 до 12 мес. Месячная ставка 41%/12 = 3,42

let _config = {
  calc: {
    minSum: 1000000,
    toTwentySum: 30000,
    toThirtySum: 110000,
    maxSum: 2000000,
    minDays: 3,
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
    `background: linear-gradient(to right,#237D26 ${
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
      `background: linear-gradient(to right, #237D26 ${
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
  const loader = document.querySelector("#infoCrCal");

  const $sum = document.querySelector(_config.calc.sumSelector);
  const $days = document.querySelector(_config.calc.daysSelector);

  const $daysText = document.querySelector("#daysText");
  const $sumText = document.querySelector("#sumText");

  const $sumTextPreview = document.querySelector("#sumTextPreview");

  const overpayment = document.getElementById("overpayment");
  const returnSumText = document.getElementById("returnSumText");

  function calc() {
    $daysText.innerText = $days.value;
    $sumText.innerText = $sum.value
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (item) {
        return item.split("").reverse().join("");
      })
      .reverse()
      .join(" ");
    $sumTextPreview.innerText = $sum.value
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (item) {
        return item.split("").reverse().join("");
      })
      .reverse()
      .join(" ");

    overpayment.innerText = Math.round((3.42 / 100) * $days.value * $sum.value)
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (item) {
        return item.split("").reverse().join("");
      })
      .reverse()
      .join(" ");

    returnSumText.innerText = Math.round(
      ((3.42 / 100) * $days.value * $sum.value + $sum.value * 1) / $days.value
    )
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (item) {
        return item.split("").reverse().join("");
      })
      .reverse()
      .join(" ");
  }
  $sum?.addEventListener("input", () => {
    calc();
  });
  $days?.addEventListener("input", () => {
    calc();
  });
  calc();
  sliderInit("#myinput");
  sliderInit("#myinput2");
});

