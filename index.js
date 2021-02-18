const checkbox = document.querySelector(".switch");
const monthly = document.getElementById("monthly");
const monthly1 = document.getElementById("monthly1");
const monthly2 = document.getElementById("monthly2");
const yearly = document.getElementById("yearly");
const yearly1 = document.getElementById("yearly1");
const yearly2 = document.getElementById("yearly2");

checkbox.addEventListener("change", function () {
  if (yearly.className == "hide") {
    monthly.classList.add("hide");
    monthly1.classList.add("hide");
    monthly2.classList.add("hide");
    yearly.classList.remove("hide");
    yearly1.classList.remove("hide");
    yearly2.classList.remove("hide");
  } else {
    monthly.classList.remove("hide");
    monthly1.classList.remove("hide");
    monthly2.classList.remove("hide");
    yearly.classList.add("hide");
    yearly1.classList.add("hide");
    yearly2.classList.add("hide");
  }
});
