function add(param1, param2) {
  if (arguments.length != 2) {
    throw new Error("2 args are needed");
  }
  return param1 + param2;
}

// add(9, 9);

//hoisting

// function add() {
//   return 10 + 20;
// }

var add1;
add1(9, 9);
add1 = function(param1, param2) {
  return param1 + param2;
};

var add2 = add1;

function sum() {
  var t = 0;
  for (var i = 0; i < arguments.length; i++) {
    t += arguments[i];
  }
  return t;
}

//strict
function test() {
  "use strict";
  a = 10;
}

//scoping
function something() {
  var a = 10;
  function inner() {
    a = 20;
    b = 200;
  }
  inner();
  console.log(a, b);
  if (a >= 10) {
    var b = 20;
  }
  console.log(a, b);
}

function createIncrementor(start) {
  return function() {
    // (1)
    start++;
    return start;
  };
}
