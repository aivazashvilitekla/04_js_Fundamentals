// Task 1
function add(p) {
  let sum = 0;
  sum += p;
  function add2(p2) {
    return (sum += p2);
  }
  return add2;
}
console.log(add(2)(3));
console.log(add(1)(2));

// Task 2
function multipliedSum(arr) {
  let sum = arr.reduce((acc, item) => (acc += item), 0);
  function multiply(n) {
    return (sum *= n);
  }
  return multiply;
}

console.log(multipliedSum([1, 2, 3, 4])(2));
console.log(multipliedSum([1, 2])(3));
console.log(multipliedSum([0])(20));

// Task 3
function addSuffix(suffix) {
  function add(word) {
    return word + suffix;
  }
  return add;
}

const addLy = addSuffix("ly");

console.log(addLy("hopeless"));
console.log(addLy("total"));

const addLess = addSuffix("less");

console.log(addLess("fear"));
console.log(addLess("ruth"));

// Task 4
// ფიქრის პროცესში ;დ

// Task 5
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};
let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

// მხოლოდ პირველზე იცის ჯავასკრიპტმა რომელ ობიექტზე ვიძახებთ sayHi ფუნქციას, ამიტომ მხოლოდ პირველი ბეჭდავს კონსოლში სახელს
