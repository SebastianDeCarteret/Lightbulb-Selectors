count = 0;

function bulb(bulbNumber) {
  updateGrammarAndCount();
  document.querySelector(`#lightbulb${bulbNumber}`).classList.toggle("active");
}

function updateGrammarAndCount() {
  count++;
  document.querySelector("#counter-text").innerHTML = count;
  count === 1
    ? (document.querySelector("#times-text").innerHTML = "time")
    : (document.querySelector("#times-text").innerHTML = "times");
}
