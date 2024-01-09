const div = document.querySelector("div");
const button = document.querySelector("button");
div.addEventListener("click", () => {
  console.log("div clicked");
});

button.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("button clicked");
});

let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

const {
  name,
  age,
  address: { street, city, zipCode: zipi },
} = person;
console.log(name, age, street, city, zipi);

// Function with object parameter and default values
function getUserInfo(user) {
  // Destructuring with defaults
  const {
    name = "Guest",
    age = 25,
    address: { city = "Unknown City" } = {},
  } = user;

  // Multiple returns
  return `${name} is ${age} years old and lives in ${city}.`;
}

// Example usage
const user1 = {
  name: "John",
  age: 30,
  address: {
    city: "Anytown",
  },
};

const user2 = {
  name: "Alice",
  address: {}, // No age or city specified
};

console.log(getUserInfo(user1));
console.log(getUserInfo(user2));

const str = "Hello";
const charArray = Array.from(str, (e) => e + 1);

console.log(charArray);
