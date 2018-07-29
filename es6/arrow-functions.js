var multiplyES5 = function(x, y) {
  return x * y;
};

const multiplyES6 = (x, y) => x * y;

var numbers = [1, 2, 3, 4, 5];
numbers.map(e => e * 5);
numbers.filter(e => e % 2 == 0);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = function() {
    console.log(`Person name:${this.name} and age:${this.age}`);
  };
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = () => {
    console.log(`Person name:${this.name} and age:${this.age}`);
  };
}
