function countDown(n) {
  if (n === 0) {
    console.log("Done");
    return;
  }
  console.log(n);
  countDown(n - 1);
}

countDown(5);

function flatronArray(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatronArray(item));
    } else {
      return acc.concat(item);
    }
  }, []);
}

console.log(flatronArray([1, [2, [3, 4]], 5]));

const array1 = ["Hello"];
const array2 = ["World"];

const result = array1.concat(array2);
console.log("result", result);
console.log(result.join(" "));

console.log([1, 2].join(" "));
