let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    console.log("inside new promise");
    if (is_shopOpen) {
      console.log("inside if");
      setTimeout(() => {
        console.log("inside setTimeout");

        resolve(work());
      }, time);
    } else {
      console.log("inside else");
      reject(console.log("our shop is closed"));
    }
  });
};

order(4000, () => {
  console.log(`${stocks.Fruits[0]}`);
});
