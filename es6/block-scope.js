var a1 = 10;

function makeRand(seed) {
  if (seed > 0) {
    let random = Math.random();
  }
  let random = 10;
  random = 200;
  console.log(random);
}

makeRand(-10);

//use case

for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
