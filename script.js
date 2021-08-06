"use strict()";

const allKeys = document.querySelectorAll(".actions,.digits");
let inputScreen = document.querySelector(".input");
let outputScreen = document.querySelector(".output");
let input = "";
for (key of allKeys) {
  key.addEventListener("click", (e) => {
    buttonText = e.target.innerHTML;
    console.log(buttonText);

    if (buttonText == "=") {
      try {
        outputScreen.value = eval(input);
      } catch (err) {
        outputScreen.value = err.message;
      }
    } else if (buttonText == "C") {
      input = inputScreen.value = "";
      outputScreen.value = "";
    } else if (buttonText == "←") {
      input = input.slice(0, -1);
      inputScreen.value = input;
      outputScreen.value = "";
    } else {
      input += buttonText;
      inputScreen.value = input;
    }
  });
}
