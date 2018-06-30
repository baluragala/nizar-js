var arr = ["a", "b", "c"];
var arr2 = new Array("a", "b", "c");
console.log(arr.length);
console.log(arr.push("back"));
console.log(arr.pop());
console.log(arr.unshift("front"));
console.log(arr.shift());
console.log(arr.indexOf("b"));
console.log(arr.join("-"));
console.log(arr.slice(2, 4));

arr.forEach(function(ele, index) {
  console.log(`${index}.${ele}`);
});

for (let i = 0; i < arr.length; i++) {
  console.log(`${i}.${arr[i]}`);
}

var numbers = [1, 2, 3, 4, 5];
numbers.map(function(e) {
  return e * 5;
});
numbers.filter(function(e) {
  return e % 2 == 0;
});

numbers.find(function(e) {
  return e % 2 == 0;
});

numbers.findIndex(function(e) {
  return e % 2 == 0;
});

var md = [[1, 2], 5, [1, [1, [1]]]];
