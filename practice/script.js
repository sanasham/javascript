// let x = 1;
// let y = 3;
// console.log(x++ );
// console.log("after increment :",x++ );
// console.log(++y);
// console.log(x++ + ++y);
// console.log("x,y", x, y);

let arr = [1, 2, 3];
function addToArr(value) {
  value.push(4);
  console.log(value); // Output: [1, 2, 3, 4]
}

addToArr(arr);
console.log(arr);

function introduce(language, country) {
  console.log(
    `my name is ${this.name} our country is ${country} and our language is ${language}`
  );
}

introduce(this, "english", "usa");

const person = { name: "sayyed" };

introduce.call(person, "telugu", "india");

introduce.apply(person, ["telugu", "india", "vali"]);

let myObject = {
  name: "vali",
  surname: "sayyed",
  lastname: "esub",
};

let userDetails = new Object();
userDetails.name = "shamreen";
userDetails.firstName = "Diya";
console.log(userDetails);

let newObj = Object.create(myObject);
console.log("these values resides inside prototype", newObj);

let lesson = {
  lessonName: "Data structures",
  author: "vali",
};
let teacher = {
  teacher: "Saikrishna",
  location: "hyderabad",
};

let combineObjectProperties = Object.assign({}, lesson, teacher);
console.log("combined object properties", combineObjectProperties);

console.log(Object.keys(combineObjectProperties));
console.log(Object.values(combineObjectProperties));
console.log(Object.entries(combineObjectProperties));

let data = {
  a: 10,
  b: 20,
};

// Object.freeze(data);
data.c = 40;
console.log(data);
Object.seal(data);
data.a = 30;
console.log(data);

let arr1 = [1, 2, 3, 4, 5, 0, 10];
let newArr1 = arr1.splice(2, 4, 8, 9, 6);
console.log(arr1);
console.log("new array", newArr1);

// extracting input values

const input = [
  { amt: 52 },
  { mrp: { tax: { amt: 11 } } },
  { mrp: { tax: { amt: 24 } } },
  { amt: 37 },
  { tax: { amt: 42 } },
];

function extractAmtValues(obj) {
  let amts = [];
  console.log("object", obj);

  if (typeof obj === "object" && obj !== null) {
    console.log("inside if");
    for (let key in obj) {
      console.log("key", key);
      if (key === "amt") {
        amts.push(obj[key]);
      } else {
        console.log("not key", key);
        amts = amts.concat(extractAmtValues[obj[key]]);
      }
    }
  }
  return amts;
}

const allAmts = input.flatMap((item) => extractAmtValues(item));
console.log("all amounts", allAmts);
