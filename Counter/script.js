"use strict";
const counter = document.querySelector(".counter");
const plus = document.querySelector(".increase");
const minus = document.querySelector(".decrease");

let count = 0;
plus.addEventListener("click", function () {
  count++;
  counter.innerHTML = count;
});
minus.addEventListener("click", function () {
  count--;
  counter.innerHTML = count;
});
