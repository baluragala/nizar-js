function Point(x, y) {
  "use strict";
  this.x = x;
  this.y = y;
  // this.print = function() {
  //   console.log(`(${this.x},${this.y})`);
  // };
}

Point.prototype.print = function() {
  console.log(`(${this.x},${this.y})`);
};

var p1 = new Point(2, 3);

var p2 = new Point(20, 30);

// // function Point(x, y) {
// //   "use strict";
// //   this.x = x;
// //   this.y = y;
// // }

// // var p1 = new Point(2, 3);
// // var p2 = new Point(2, 3);
