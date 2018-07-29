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

async function doWork() {
  try {
    await task1();
    await task2();
    task3();
    await task4();
  } catch (err) {
    console.log(err);
  }
}

function start(cb) {
  doWork().then(() => {
    console.log("done");
    cb();
  });
}

//doWork().then(() => console.log("done"));
