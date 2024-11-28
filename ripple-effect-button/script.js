const btnElement = document.querySelector(".btn");
btnElement.addEventListener("mouseover", (e) => {
  //   console.log(e.pageX, e.pageY);
  console.log(btnElement.offsetLeft, btnElement.offsetTop);
});
