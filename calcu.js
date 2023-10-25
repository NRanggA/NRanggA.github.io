function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  let result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
  window.alert("Hasilnya : " + result);
}

function calculateSqrt() {
  let inputValue = document.getElementById("result").value;
  if (inputValue) {
    let sqrtResult = Math.sqrt(parseFloat(inputValue));
    document.getElementById("result").value = sqrtResult;
    window.alert("Akar dari " + inputValue + " = " + sqrtResult);
  } else {
    window.alert("Please enter a valid number before taking the square root.");
  }
}

function calculateCos() {
  let inputValue = document.getElementById("result").value;
  if (inputValue) {
    let cosResult = Math.cos((inputValue * Math.PI) / 180);
    document.getElementById("result").value = cosResult;
    window.alert("Cos dari " + inputValue + " = " + cosResult);
  } else {
    window.alert("Masukkan angka sebelum menghitung Cos.");
  }
}

function calculateSin() {
  let inputValue = document.getElementById("result").value;
  if (inputValue) {
    let sinResult = Math.sin((inputValue * Math.PI) / 180);
    document.getElementById("result").value = sinResult;
    window.alert("Sin dari " + inputValue + " = " + sinResult);
  } else {
    window.alert("Masukkan angka sebelum menghitung Sin.");
  }
}

function calculateLog() {
  let inputValue = document.getElementById("result").value;
  if (inputValue) {
    let logResult = Math.log(parseFloat(inputValue));
    document.getElementById("result").value = logResult;
    window.alert("Log dari " + inputValue + " = " + logResult);
  } else {
    window.alert("Masukkan angka sebelum menghitung Log.");
  }
}
