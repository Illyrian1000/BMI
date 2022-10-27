"use strict";

let heightSelectorValue = document.getElementById("height-selector");
let heightValue = document.getElementById("height-number");
let height = 0;
let firstContainer = document.getElementById("first-container");
let secondContainer = document.getElementById("second-container");

heightSelectorValue.oninput = function () {
  heightValue.innerHTML = this.value;
  height = this.value;
  return height;
};

let weightSelectorValue = document.getElementById("weight-selector");
let weightValue = document.getElementById("weight-number");
let weight = 0;

weightSelectorValue.oninput = function () {
  weightValue.innerHTML = this.value;
  weight = this.value;
  return weight;
};

function calcBMI() {
  let result = " ";
  let heightInput = heightSelectorValue.oninput();
  let weightInput = weightSelectorValue.oninput();

  heightInput = heightInput / 100;
  let BMI = weightInput / (heightInput * heightInput);

  if (BMI < 18.5) {
    result = `Your BMI is ${Math.trunc(
      BMI
    )}. You are Underweight and you need to gain some weight`;
  } else if (BMI >= 18.5 && BMI < 24.9) {
    result = `Your BMI is ${Math.trunc(
      BMI
    )}. You have a normal weight for your height. Good job!`;
  } else if (BMI >= 25 && BMI < 29.9) {
    result = `Your BMI is ${Math.trunc(
      BMI
    )}. You are Overweight. You need to lose some weight!`;
  } else {
    result = `Your BMI is ${Math.trunc(
      BMI
    )}. You are Obese. You need to lose e lot of weight!!!`;
  }

  secondContainer.innerHTML = result;

  firstContainer.style.display = "none";
  secondContainer.style.display = "flex";
  secondContainer.style.alignItems = "center";
}

// Below 18.5	Underweight
// 18.5–24.9	Normal weight
// 25.0–29.9	Overweight
// 30.0 and higher	Obese
