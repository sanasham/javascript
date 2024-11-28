// //Array Declaration

// let person = {
//   name: "vali",
//   age: 40,
// };
// let arr = ["apple", "banana", "cherry", person];

// //accessing array

// console.log("first element:", arr[3]);

// console.log(arr.length);

// // adding elements at end of the array
// //push , pop

// arr.push("clustered apple");
// console.log(arr);
// // removing an element from end of the array
// arr.pop();
// console.log("after removing :", arr);

// console.log(arr.unshift("orange"));
// console.log(arr.shift());
// console.log(arr);

// /// loops

// // for loop
// console.log("==============================");

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }
// console.log(arr);
// console.log("arr.length", arr.length);
// let i = 0;
// while (i < arr.length) {
//   console.log("while loop elements", i, arr[i]);
//   i++;
// }

// /// inbuilt loops which are provided by javascript
// console.log("==============================");

// const numbers = [1, 2, 3, 4, 5];
// const final = numbers.filter((item, index, newAarray) => {
//   if (item !== 13) {
//     return (item += 5);
//   }
// });

// console.log("final", final);

// const company = {
//   name: "Tech Solutions",
//   location: "Hyderabad",
//   departments: {
//     development: {
//       head: "John Doe",
//       employees: [
//         { id: 1, name: "Alice", role: "Frontend Developer" },
//         { id: 2, name: "Bob", role: "Backend Developer" },
//       ],
//     },
//     hr: {
//       head: "Jane Smith",
//       employees: [
//         { id: 3, name: "Charlie", role: "HR Manager" },
//         { id: 4, name: "Daisy", role: "Recruiter" },
//       ],
//     },
//   },
//   established: 2010,
// };

// const clone = structuredClone(company);

// clone.departments.development.head = "vali";
// console.log(clone);
// console.log(company);

// const myreducer = numbers.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log("my reducer", myreducer);

// console.log("===========SOME===================");

// const result = numbers.some((item) => item > 3);
// console.log("result", result);

// const every = numbers.every((item) => item > 3);
// console.log("result", every);

// const find = numbers.find((item) => item > 3);
// console.log("result", find);

// console.log("===========REST===================");

// const newItems = [1, 2, 3, 4, 5];
// const newItems1 = [11, 12, 13, 14, 15];
// const finalItems = [newItems + newItems1];
// console.log("final items", finalItems);
// const spreadItems = [...newItems, ...newItems1];
// console.log("spread items 1", spreadItems);

// const concateItems = newItems.concat(newItems1);
// console.log("concate items ", concateItems);

// console.log("===========SPREAD===================");

// function generate([a, b, ...numbers]) {
//   console.log("a", b, "b", b, "rest", numbers);
//   return numbers;
// }

// generate([1, 2, 3, 45, 55]);

const fruits = [2, 3, 5, 7, 9, 3, 5, 7];

console.log(fruits.slice(2, 6));
console.log(fruits.slice(0, 1));

console.log(fruits.splice(2, 2, "orange"));
console.log(fruits);

console.log("===========Fill===================");
const dummyArray = [2, 4, 6, 8, 34, 54, 44];

dummyArray.fill(0, 3);
console.log(dummyArray);
// find 54 location

const findINdex = dummyArray.findIndex((item) => item === 54);
console.log("findindex", findINdex);
//flat

const flatArray = [1, [2, 3], [7, [4, 5], 6]];

console.log(flatArray.flat(13));

/// reverse An array

console.log(dummyArray.reverse());
const sortArray = [4, 3, 7, 9, 12, 56, 86];

console.log(sortArray.sort((a, b) => a - b));
// second largest number from given array

const givenArray = [2, 4, 6, 8, 34, 54, 44];

function secondLargest(a) {
  const unique = Array.from(new Set(a));
  unique.sort((a, b) => a - b);

  return unique[unique.length - 2];
}
console.log("second larget number", secondLargest([10, 5, 10]));

const givenArray2 = [2, 4, 6, 8, 34, 54, 44];

function secondLargestOptimised(arr) {
  let larget = Number.NEGATIVE_INFINITY;
  let secondLarget = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larget) {
      larget = arr[i];
      secondLarget = larget;
    } else if (arr[i] > secondLarget && arr[i] > larget) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log("second largest", secondLargest(givenArray2));
console.log("second largest ", secondLargest([12, 35, 1, 10, 34, 1]));

//Rotate an array by k

function rotateArray(arr, k) {
  console.log("object", arr.slice(1));
  let size = arr.length;
  let temp = arr;
  if (size > k) {
    for (let i = 1; i <= k; i++) {
      let first = arr[i - 1];
      temp = temp.slice(i);
      temp.push(first);
    }
  }
  console.log("temp", temp);
  console.log("arr", arr);
  console.log("givenArray2", givenArray2);
}
// console.log("rotate an array", rotateArray(givenArray2, 8));
console.log("rotate an array", rotateArray(givenArray2, 2));

console.log("===========Rotate clockwise===================");

function rotateMyArray(num, k) {
  for (let index = 0; index < k; index++) {
    console.log("lenth ", num.length);
    const rotated = num.splice(num.length - 1, 1)[0];
    console.log("splice", rotated);
    num.unshift(rotated);

    // console.log("first", num);
  }
  return num;
}

console.log("clock wise rotation", rotateMyArray([1, 2, 3, 4, 5], 2));

function removeDuplicates(num) {
  let size = num.length;
  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    const element1 = num[index + 1];
    if (element === element1) {
      const final = num.splice(index + 1, 1);

      console.log("final", final);
      index--;
    }
  }
  return num;
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 5]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//without JS inbuilt function
// Two pointer approch

function removeDuplicatesWithoutJS(nums) {
  if (nums.length === 0) return 0;
  // [0,0,1,1,1,2,2,3,3,4]

  //0, 0, 1, 1, 1, 2, 2, 3, 3, 4
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    // console.log("nums values ", nums);
  }
  nums.splice(i + 1);
  return nums;
}
console.log(removeDuplicatesWithoutJS([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

console.log(
  "======================REVERSE AN ARRAY==========================="
);

function myReverse(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(myReverse([1, 2, 3, 4, 5]));

console.log(
  "======================INPLACE REVERSE AN ARRAY==========================="
);

function inPlaceReverse(myarr) {
  let left = 0;
  let right = myarr.length - 1;
  while (left < right) {}
}
