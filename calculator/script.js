const btnElement = document.querySelectorAll("button");
// console.log("button", btnElement);

const inputElement = document.getElementById("result");

for (let i = 0; i < btnElement.length; i++) {
  btnElement[i].addEventListener("click", () => {
    const btnValue = btnElement[i].textContent;
    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else {
      appendValue(btnValue);
    }
  });
}

function clearResult() {
  inputElement.value = "";
}
function calculateResult() {
  inputElement.value = eval(inputElement.value);
}
function appendValue(btnValue) {
  inputElement.value += btnValue;
}
