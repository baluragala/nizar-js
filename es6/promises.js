let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "done" });
  }, 5000);
});

p.then(data => console.log(data)).catch(err => console.log(err));

function task1() {
  return new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
    resolve();
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(3);
      console.log(4);
      console.log(5);
      resolve();
    }, 1000);
  });
}

function task3() {
  console.log(6);
}

function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(7);
      resolve();
    }, 200);
  });
}

function doWork() {
  task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => task4())
    .catch(err => console.log(err));
}

doWork();

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1"), 1500);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2"), 100);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3"), 500);
});

Promise.race([p1, p2, p3])
  .then(r => console.log(r))
  .catch(err => console.log(err));

Promise.all([p1, p2, p3])
  .then(r => console.log(r))
  .catch(err => console.log(err));
