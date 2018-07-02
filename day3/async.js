// function task1(next) {
//   console.log(1);
//   console.log(2);
//   next(task3);
// }
// function task2(next) {
//   setTimeout(function() {
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     next(task4);
//   }, 1000);
// }
// function task3(next) {
//   console.log(6);
//   next();
// }

// function task4(next) {
//   console.log(7);
// }

// function doWork() {
//   task1(task2);
// }

// doWork();

function task1() {
  console.log(1);
  console.log(2);
  setTimeout(function() {
    console.log(3);
    console.log(4);
    console.log(5);
    setTimeout(function() {
      console.log(6);
      setTimeout(function() {
        console.log(7);
        setTimeout(function() {
          console.log(8);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}
