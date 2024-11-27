let value = document.getElementById("count");
let display = value.innerHTML;
const increment = document.getElementById("inc");
const decrement = document.getElementById("dec");
//console.log(`incremtn ${increment}`);

increment.addEventListener("click", () => {
  //display += 1;

  console.log(++display);
  value.innerHTML = display;
});

decrement.addEventListener("click", () => {
  //display += 1;

  console.log(--display);
  value.innerHTML = display;
});
