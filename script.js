count = 0;

function bulb1() {
  count++;
  document.querySelector("#counter-text").innerHTML = count;
  document.querySelector("#lightbulb1").classList.toggle("active");
}

function bulb2() {
  count++;
  document.querySelector("#counter-text").innerHTML = count;
  document.querySelector("#lightbulb2").classList.toggle("active");
}

function bulb3() {
  count++;
  document.querySelector("#counter-text").innerHTML = count;
  document.querySelector("#lightbulb3").classList.toggle("active");
}
