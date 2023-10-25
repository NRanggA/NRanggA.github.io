function appendToResult(value) {
  document.getElementById("input").value += value;
}

function clearResult() {
  document.getElementById("input").value = "";
  document.getElementById("result").value = "";
}

function calculateResult() {
  let result = eval(document.getElementById("input").value);
  let result = eval(input);
  document.getElementById("result").value = result;
  window.alert("Hasilnya : " + result);
}

function calculateSqrt() {
  let inputValue = document.getElementById("input").value;
  if (inputValue) {
    let sqrtResult = Math.sqrt(parseFloat(inputValue));
    document.getElementById("result").value = sqrtResult;
    window.alert("Akar dari " + inputValue + " = " + sqrtResult);
  } else {
    document.getElementById("result").value = "";
  }
}

function calculateCos() {
  let inputValue = document.getElementById("input").value;
  if (inputValue) {
    let cosResult = Math.cos((inputValue * Math.PI) / 180);
    document.getElementById("result").value = cosResult;
    window.alert("Cos dari " + inputValue + " = " + cosResult);
  } else {
    document.getElementById("result").value = "";
  }
}

function calculateSin() {
  let inputValue = document.getElementById("input").value;
  if (inputValue) {
    let sinResult = Math.sin((inputValue * Math.PI) / 180);
    document.getElementById("result").value = sinResult;
    window.alert("Sin dari " + inputValue + " = " + sinResult);
  } else {
    document.getElementById("result").value = "";
  }
}

function calculateLog() {
  let inputValue = document.getElementById("input").value;
  if (inputValue) {
    let logResult = Math.log(parseFloat(inputValue));
    document.getElementById("result").value = logResult;
    window.alert("Log dari " + inputValue + " = " + logResult);
  } else {
    document.getElementById("result").value = "";
  }
}
