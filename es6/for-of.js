let numbers = [1, 2, 3, 4, 5];
for (let n of numbers) {
  console.log(n);
}

//2 protocols
// Iterable and Iterator

function forOf(iterable) {
  if (iterable[Symbol.iterator] == undefined) {
    throw new Error(`${iterable} is not an iterable`);
  }

  const it = iterable[Symbol.iterator]();
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}

// generators
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
