//Array Declaration

let person = {
  name: "vali",
  age: 40,
};
let arr = ["apple", "banana", "cherry", person];

//accessing array

console.log("first element:", arr[3]);

console.log(arr.length);

// adding elements at end of the array
//push , pop

arr.push("clustered apple");
console.log(arr);
// removing an element from end of the array
arr.pop();
console.log("after removing :", arr);

console.log(arr.unshift("orange"));
console.log(arr.shift());
console.log(arr);

/// loops

// for loop
console.log("==============================");

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}
console.log(arr);
console.log("arr.length", arr.length);
let i = 0;
while (i < arr.length) {
  console.log("while loop elements", i, arr[i]);
  i++;
}

/// inbuilt loops which are provided by javascript
console.log("==============================");

const numbers = [1, 2, 3, 4, 5];
const final = numbers.filter((item, index, newAarray) => {
  if (item !== 13) {
    return (item += 5);
  }
});

console.log("final", final);

const company = {
  name: "Tech Solutions",
  location: "Hyderabad",
  departments: {
    development: {
      head: "John Doe",
      employees: [
        { id: 1, name: "Alice", role: "Frontend Developer" },
        { id: 2, name: "Bob", role: "Backend Developer" },
      ],
    },
    hr: {
      head: "Jane Smith",
      employees: [
        { id: 3, name: "Charlie", role: "HR Manager" },
        { id: 4, name: "Daisy", role: "Recruiter" },
      ],
    },
  },
  established: 2010,
};

const clone = structuredClone(company);

clone.departments.development.head = "vali";
console.log(clone);
console.log(company);

const myreducer = numbers.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log("my reducer", myreducer);

console.log("===========SOME===================");

const result = numbers.some((item) => item > 3);
console.log("result", result);

const every = numbers.every((item) => item > 3);
console.log("result", every);

const find = numbers.find((item) => item > 3);
console.log("result", find);

console.log("===========REST===================");

const newItems = [1, 2, 3, 4, 5];
const newItems1 = [11, 12, 13, 14, 15];
const finalItems = [newItems + newItems1];
console.log("final items", finalItems);
const spreadItems = [...newItems, ...newItems1];
console.log("spread items 1", spreadItems);

const concateItems = newItems.concat(newItems1);
console.log("concate items ", concateItems);

console.log("===========SPREAD===================");

function generate([a, b, ...numbers]) {
  console.log("a", b, "b", b, "rest", numbers);
  return numbers;
}

generate([1, 2, 3, 45, 55]);
