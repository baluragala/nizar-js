/*
named
anonymous
constructor
*/

function Point(x, y) {
  "use strict";
  this.x = x;
  this.y = y;
}

Point.prototype.print = function() {
  console.log(this);
  console.log(`(${this.x},${this.y})`);
};

/*

bind
call
apply

*/

function add(param1, param2) {
  if (arguments.length != 2) {
    throw new Error("2 args are needed");
  }
  return param1 + param2;
}
undefined;
add.call(null, 10, 20);
30;
add.apply(null, params);
30;
var params = [10, 20];
undefined;
add.apply(null, params);
30;
