document.addEventListener("DOMContentLoaded", function () {
  let phoneInputs = document.querySelectorAll("input[data-tel-input]");

  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };

  let onPhoneInput = function (e) {
    let input = e.target,
      inputValue = getInputNumbersValue(input),
      formattedInputValue = "",
      selectionStart = input.selectionStart;

    if (!inputValue) {
      return (input.value = "");
    }
    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputValue;
      }
      return;
    }

    if (["7", "8"].indexOf(inputValue[0]) > -1) {
      //KZ number
      let firstSymbols = inputValue[0] == "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      console.log(inputValue[1]);
      if (inputValue.length > 1) {
        if (inputValue[1] != "7") {
          formattedInputValue += "(7" + inputValue.substring(1, 4);
        } else {
          formattedInputValue += "(" + inputValue.substring(1, 4);
        }
      }
      if (inputValue.length >= 5) {
        formattedInputValue += ") " + inputValue.substring(4, 7);
      }
      if (inputValue.length >= 8) {
        formattedInputValue += "-" + inputValue.substring(7, 9);
      }
      if (inputValue.length >= 10) {
        formattedInputValue += "-" + inputValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputValue;
      // не КЗ номер
    }
    input.value = formattedInputValue;
  };
  let onPhoneKeyDown = function (e) {
    if (e.keyCode == 8 && getInputNumbersValue(e.target).length == 1) {
      e.target.value = "";
    }
  };
  for (i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener("input", onPhoneInput);
    input.addEventListener("keydown", onPhoneKeyDown);
  }
});
